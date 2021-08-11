import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, Label, Navigator, Switch } from '@tarojs/components'
import { AtInput, AtButton, } from 'taro-ui'
import classnames from 'classnames'
import Taro from "@tarojs/taro"
import tip from '@/utils/tip'
import commonUtil from '@/utils/common'
import Btn60s from './components/btn-60s'
import './login.less'

interface LofinState {
  phone: string,
  code: string,
  isGetPhone: boolean,
  agree: boolean
}

interface LoginProps {
  authorization,
  user,
  dispatch

}
const ENV = Taro.getEnv();
/**登录页面 */
@connect(({ authorization, user }) => ({
  authorization, user
}))
class Login extends Component<LoginProps, LofinState> {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      code: '',
      isGetPhone: false, // 是否是获取手机号授权
      agree: false,
    }
  }

  skipLogin = false;//跳过登录
  user = {
    token: '',
    openid: '',
  };

  async componentDidMount() {

  }

  // 先通过静默授权  查询用户状态
  // 需要操作的行为：1、需要显式授权；2、需要绑定；3、已登录
  queryActType() {
    const { dispatch } = this.props;
    Taro.login({
      success: (res) => {
        if (res.code) {
          console.log('wx login ', res);
          const params = {
            code: res.code,
            appId: APPID,
            companyId: commonUtil.getCompanyId(),
            shopId: commonUtil.getShopId()
          }
          dispatch({
            type: 'authorization/miniSilence', payload: params,
          }).then((res) => {
            if (res.actType === 2) {
              this.setState({ isGetPhone: true })
            } else if (res.actType === 3) {
              this.skipLogin = true;
              this.user = res;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail: (err) => {
        console.log('登录失败！' + err.errMsg)
      }
    })
  }

  handleChange = (name: keyof LofinState, value) => {
    this.setState({
      [name]: value
    } as Pick<LofinState, keyof LofinState>)
  }

  onSubmit = () => {
    const { dispatch } = this.props;
    const { phone, code } = this.state;
    dispatch({
      type: 'user/login', payload: { phone: phone, code: code },
    }).then((res) => {
      console.log('res', res);
      this.goBack()
    }).catch((err) => {
      console.log('err ', err);
    })
  }

  agreeFunc = (e) => {
    this.setState({
      agree: e.detail.value
    })
  }

  isDisabled = (): boolean => {
    const { phone, code, agree } = this.state;
    return /^1\d{10}$/.test(phone) && code && agree ? false : true;
  }

  //手机号登录
  handleLoginClick = () => {
    const { dispatch } = this.props;
    const { phone, code } = this.state;

    const params = {
      companyId: commonUtil.getCompanyId(),
      phone,
      userType: 6,
      verifychkcode: code,
      shopId: commonUtil.getShopId(),
      openId: commonUtil.getOpenId()
    }
    Taro.showLoading({
      title: '登录中...'
    })
    dispatch({
      type: 'authorization/login', payload: params
    }).then((result) => {
      Taro.hideLoading()
      this.saveUser(result)
    }).catch((err) => {
      Taro.hideLoading()
      tip.showTips(err.msg)
    })
  }

  // 微信授权获取手机号
  handleGetPhone = (info) => {

    if (!this.state.agree) {
      tip.showTips('登录需要阅读并同意协议哦')
      return
    }
    Taro.showLoading({
      title: '登录中...'
    })
    Taro.login({
      success: (res) => {
        Taro.hideLoading()
        if (res.code && info.detail.encryptedData) {
          console.log('wx login ', res);
          this.miniPhone(res.code, info)
        } else {
          console.log('登录失败！' + res.errMsg)
          tip.showTips('获取用户信息失败,请稍后重试')
        }
      },
      fail: (err) => {
        Taro.hideLoading()
        tip.showTips(err.errMsg)
      }
    })
  }

  // 微信授权 获取用户信息
  handleGetUserInfo = (info) => {
    if (!this.state.agree) {
      tip.showTips('登录需要阅读并同意协议哦')
      return
    }
    if (this.skipLogin) {
      this.saveWeChatInfo();
      return;
    }
    Taro.showLoading({
      title: '登录中...'
    })
    Taro.login({
      success: (res) => {
        Taro.hideLoading()
        if (res.code && info.detail.encryptedData) {
          console.log('wx login ', res);
          this.miniExplicit(res.code, info)
        } else {
          console.log('登录失败！' + res.errMsg)
          tip.showTips('获取用户信息失败,请稍后重试')
        }
      },
      fail: (err) => {
        Taro.hideLoading()
        tip.showTips(err.errMsg)
      }
    })
  }

  handleGetUserInfoH5 = () => {

  }
  // 小程序用户解密资料检测并初始化
  miniExplicit = (code, info) => {
    const { dispatch } = this.props;
    const params = {
      appId: APPID,
      companyId: commonUtil.getCompanyId(),
      code: code,
      encryptedData: info.detail.encryptedData,
      iv: info.detail.iv,
      shopId: commonUtil.getShopId()
    }

    Taro.showLoading({
      title: '登录中...'
    })
    dispatch({
      type: 'authorization/miniExplicit', payload: params,
    }).then((res) => {
      Taro.hideLoading()

      if (res.actType === 2) {
        this.setState({ isGetPhone: true }, () => {
          Taro.showModal({
            title: '提示',
            content: '您的微信还未绑定手机号,请再次点击微信登录以绑定手机号',
            cancelColor: '#333333',
            confirmColor: '#f54949',
          })
        })
      } else if (res.actType === 3) {
        this.user = res;
        this.saveWeChatInfo();
      }
    }).catch((err) => {
      Taro.hideLoading()
      tip.showTips(err.msg)
    })
  }

  // 小程序用户根据加密数据获取用户手机号并初始化
  miniPhone = (code, info) => {
    const { dispatch } = this.props;
    const params = {
      appId: APPID,
      companyId: commonUtil.getCompanyId(),
      code,
      encryptedData: info.detail.encryptedData,
      iv: info.detail.iv,
      shopId: commonUtil.getShopId()
    }
    Taro.showLoading({
      title: '登录中...'
    })
    dispatch({
      type: 'authorization/miniPhone', payload: params,
    }).then((res) => {
      Taro.hideLoading()
      this.user = res;
      this.saveWeChatInfo();
    }).catch((err) => {
      Taro.hideLoading()
      tip.showTips(err.msg)
    })
  }

  saveUser = (info) => {
    const { dispatch } = this.props;
    dispatch({ type: 'user/saveUserInfo', payload: info })
    Taro.showLoading({
      title: '登录中...'
    })
    const timer_back = setTimeout(() => {
      Taro.hideLoading();
      timer_back && clearTimeout(timer_back)
      this.goBack()
    }, 1000)
  }

  saveWeChatInfo = () => {
    commonUtil.setToken(this.user.token)
    commonUtil.setOpenId(this.user.openid || '')
    Taro.showLoading({
      title: '登录中...'
    })
    const timer_back = setTimeout(() => {
      Taro.hideLoading();
      timer_back && clearTimeout(timer_back)
      this.goBack()
    }, 1000)
  }
  goBack = async () => {
    const routerParams = Taro.getCurrentInstance().router!.params;//获取页面参数
    const { target } = routerParams;
    //判断从邀请填简历进入时
    if (target == 'addResume' && commonUtil.getCompanyId()) {
      await this.props.dispatch({
        type: 'resume/queryJobIntensionsListDictionary', payload: {}
      })
      await this.props.dispatch({
        type: 'resume/queryResumeDetail', payload: {}
      })
    }
    if (ENV === 'WEB') {
      window.location.href = 'http://wx-test.bm001.com/#/pages/index/index';
    } else {
      Taro.navigateBack()
    }
  }

  render() {
    const { phone, code, isGetPhone, agree } = this.state;
    return (
      <View className='login'>
        <View className='loginCon'>
          <Text className='loginTitle'>手机号登录</Text>
          <AtInput
            className='loginInput'
            name='phone'
            type='number'
            placeholder='请输入您的手机号'
            value={phone}
            clear
            onChange={(value) => {
              this.handleChange('phone', value)
            }}
          >
            <Btn60s mobile={phone} />
          </AtInput>
          <AtInput
            className='loginInput'
            name='code'
            clear
            type='text'
            placeholder='请输入验证码'
            value={code}
            onChange={(value) => {
              this.handleChange('code', value)
            }}
          />
          <View className='checkbox'>
            <Label className='label'>
              <Switch className='switch' checked={agree} type='checkbox' onChange={this.agreeFunc} color='#F2544E' />阅读并同意以下协议<Navigator url='/pages/login/attachment'>《服务协议》</Navigator>
            </Label>
          </View>
          <AtButton onClick={this.handleLoginClick} type='primary' disabled={this.isDisabled()}
            className='loginBtn'
          >登录</AtButton>
        </View>
        <View className={classnames({ "btnShow": ENV === 'WEAPP', "wxLogin": true })}>
          <View className='wxLoginBtn'>
            <View className='wxLoginBtnIcon iconfont iconweixin' />
            {
              isGetPhone ? (
                <Button className='wxLoginBtn-hide' openType='getPhoneNumber'
                  onGetPhoneNumber={this.handleGetPhone}
                >登录</Button>
              ) : (
                <Button className='wxLoginBtn-hide' openType='getUserInfo'
                  onGetUserInfo={this.handleGetUserInfo}
                >登录</Button>
              )
            }
          </View>
          <Text className='wxLoginText'>微信登录</Text>
        </View>
      </View>
    )
  }
}

export default Login

