import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less';



interface UploadProps {
  onChange?,
  propsfileList?: string
}
interface UploadState {
  image: string
}

//上传图片
export default class Upload extends Component<UploadProps, UploadState> {
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
        const tempFilePaths = res.tempFilePaths;
        onChange && onChange(tempFilePaths[0]);
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
      <View className="upload">
        {image ? <View className="idCardImg">
          <Image
            onClick={this.chooseImage}
            src={image}
            className="upload-image"
            mode="aspectFill"
          />
        </View> : <View className="idCard" onClick={this.chooseImage}>
            <View className="iconfont icontianjiashenfenzheng idCardicon"></View>
            <Text className="text">添加身份证自动识别</Text>
          </View>}

      </View>
    );
  }
}
