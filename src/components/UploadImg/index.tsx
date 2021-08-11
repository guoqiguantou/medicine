import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Utils from '@/utils/common'
import request from '@/utils/request'
import classnames from 'classnames'
import './index.less';
import tip from '@/utils/tip';


interface UploadImgProps {
  title?: string,
  icon?: string,
  onChange?,
  propsfileList?: string[],
  max?: number,
  formData?: any,//额外的formData参数
}
interface UploadImgState {
  images: string[]
}

//上传图片
export default class UploadImg extends Component<UploadImgProps, UploadImgState> {

  constructor(props) {
    super(props);
    this.state = {
      images: this.porpsList(props.propsfileList)
    }
  }


  //初始化父组件传入数据
  porpsList = (data = []) => {
    return Utils.deepClone(data);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.propsfileList.length !== this.state.images.length) {
      this.updatePropsList(nextProps.propsfileList);
    }
  }

  //更新数据
  updatePropsList = data => {
    this.setState({
      images: this.porpsList(data),
    });
  };

  onImageClick = (item) => {
    const { images } = this.state;
    Taro.previewImage({
      current: item, // 当前显示图片的http链接
      urls: images, // 需要预览的图片http链接列表
    });
  };

  handleToClose = (img) => {
    const { onChange } = this.props;
    const { images } = this.state;
    const imgArr = images.filter(item => item != img)
    this.setState({
      images: imgArr,
    });
    onChange && onChange(imgArr);
  };

  chooseImage = () => {
    const { onChange, max, formData } = this.props;
    const { images } = this.state;

    Taro.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        Taro.showLoading({
          title: '加载中',
        })
        const tempFilePaths = res.tempFilePaths;
        const img = [...images, ...tempFilePaths]
        if (max && max < img.length) {
          tip.showTips('图片不能超过' + max)
          return
        }
        const PrimiseArr = tempFilePaths.map(item => request.upload(UPLOADHOST, item, true, formData))
        Promise.all(PrimiseArr).then((res: string[]) => {
          if (res) {
            let imgArr = [...images, ...res]
            this.setState({
              images: imgArr
            });
            onChange && onChange(imgArr);
          }
          Taro.hideLoading()
        }).catch(err => {
          Taro.hideLoading()
          Taro.showToast({
            title: err.msg,
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
    let { images } = this.state;
    let { title = '添加照片', icon, max } = this.props;
    return (
      <View className="upload">
        {images.length > 0 ? <View className="uploadList at-row at-row--wrap">
          {images.map(item => {
            return (<View className="at-col at-col-4 uploadItem" key={item}>
              <View className="uploadImg">
                <View className="uploadDel" onClick={() => { this.handleToClose(item) }}>
                  <AtIcon value="close-circle" size="22" color="#F2544E" />
                </View>
                <Image
                  onClick={() => { this.onImageClick(item) }}
                  src={item}
                  className="upload-image"
                  mode="aspectFill"
                />
              </View>
            </View>)
          })}
          {!(max && images.length >= max) && <View className="at-col at-col-4 uploadItem " >
            <View className="uploadImg">
              <View className="uploadAdd" onClick={this.chooseImage}>
                <AtIcon value="camera" size="34" color="#F2544E" ></AtIcon>
                <View>
                  <Text className="uploadText">上传图片</Text>
                </View>
              </View>
            </View>
          </View>}
        </View>
          : <View className="uploadView">
            <View className="pic" onClick={this.chooseImage}>
              <View className="picTitle">
                <Text className={classnames(['iconfont', 'picIcon', icon || 'icontianjiazhaopian'])}></Text>
                <Text className="Text">{title}</Text>
              </View>
              <Text className="picInfo">点击打开相册或相机</Text>
            </View>
          </View>}
      </View>
    );
  }
}
