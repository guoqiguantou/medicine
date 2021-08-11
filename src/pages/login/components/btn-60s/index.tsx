import { View, Text } from '@tarojs/components'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as JsEncryptModule from 'jsencrypt';
import tip from '@/utils/tip'
import './index.less';

interface Btn60sProps {
  mobile: string;
  dispatch?
}
interface Btn60sState {
  times: number,
}
const TIMES = 60;
@connect(({ authorization, user }) => ({
  authorization, user
}))
class Btn60s extends Component<Btn60sProps, Btn60sState> {
  constructor(props) {
    super(props)
    this.state = {
      times: TIMES
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  timer;
  isEnabled = (mobile) => {
    return /^1\d{10}$/.test(mobile);
  }

  sendCode = async () => {
    const { mobile, dispatch } = this.props;
    if (!this.isEnabled(mobile)) {
      tip.showTips(mobile.length === 0 ? '请输入手机号' : '请输入正确的手机号')
      return;
    }

    const originStr = `phone&${mobile}@behaviour&${5}@timestamp&${new Date().getTime()}`

    let rsa = new JsEncryptModule.JSEncrypt();
    rsa.setPublicKey(PUBLICKEY)
    const encrypted = rsa.encrypt(originStr)

    dispatch({
      type: 'authorization/sendCode', payload: { secret: encrypted, keyId: KEYID }
    }).then(() => {
      tip.showTips('验证码发送成功，请注意查收')
      this.timer = setInterval(() => {
        if (this.state.times === 1) {
          this.setState({
            times: TIMES
          });
          clearInterval(this.timer);
        } else {
          this.setState(prevState => ({ times: prevState.times - 1 }))
        }
      }, 1000);
    }).catch((err) => {
      tip.showTips(err.msg)
    })
  }

  render() {
    return (
      <View className='code'>
        {this.state.times === TIMES ? (
          <View>
            <Text onClick={this.sendCode} className='text'>
              获取验证码
            </Text>
          </View>
        ) : (
          <Text className='gray'>{this.state.times}s后重新发送</Text>
        )}
      </View>
    );
  }

}

export default Btn60s;
