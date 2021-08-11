import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import request from '@/utils/request'
import './index.less';



interface UploadAvatarProps {
  onChange?,
  propsfileList?: string
}
interface UploadAvatarState {
  image: string
}

//用户头像上传

export default class UploadAvatar extends Component<UploadAvatarProps, UploadAvatarState> {
  constructor(props) {
    super(props);
    this.state = {
      image: props.propsfileList
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.propsfileList !== this.state.image) {
      this.setState({
        image: nextProps.propsfileList,
      });
    }
  }


  chooseImage = () => {
    const { onChange } = this.props;
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        Taro.showLoading({
          title: '加载中',
        })
        const tempFilePaths = res.tempFilePaths;
        request.upload(UPLOADHOST, tempFilePaths[0], true).then((res) => {
          if (res) {
            this.setState({
              image: res
            });
            onChange && onChange(res);
          }
          Taro.hideLoading()
        }).catch(err => {
          Taro.hideLoading()
          Taro.showToast({
            title: err,
            icon: 'none',
            duration: 2000
          })
          console.log(err)
        })
      },
      fail: function (err) {
        console.log('图片上传失败，请重试', err)
        Taro.showToast({
          title: '图片上传失败，请重试',
          icon: 'none',
          duration: 2000
        })
      },
    });
  };

  render() {
    let { image } = this.state;
    return (
      <View className="uploadAvatar">
        {image ? <View className="uploadImg">
          <Image
            onClick={this.chooseImage}
            src={image}
            className="upload-image"
            mode="aspectFill"
          />
        </View> : <View>
            <View className="uploadAdd" onClick={this.chooseImage}>
              <AtIcon value="camera" size="34" color="#F2544E" />
              <Text className="uploadText">上传头像</Text>
            </View>
          </View>}

      </View>
    );
  }
}
