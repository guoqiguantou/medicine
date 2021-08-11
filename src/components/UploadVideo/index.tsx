import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Text, Video, CoverView } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Utils from '@/utils/common'
import request from '@/utils/request'
import classnames from 'classnames'
import './index.less';



interface UploadImgProps {
  title?: string,
  icon?: string,
  onChange?,
  propsfileList?: string[],
  onFullscreenChange?
}

interface UploadImgState {
  files: string[]
}
//上传视频
export default class UploadImg extends Component<UploadImgProps, UploadImgState> {
  constructor(props) {
    super(props);
    this.state = {
      files: this.porpsList(props.propsfileList)
    }
  }


  //初始化父组件传入数据
  porpsList = (data = []) => {
    return Utils.deepClone(data);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.propsfileList.length !== this.state.files.length) {
      this.updatePropsList(nextProps.propsfileList);
    }
  }

  //更新数据
  updatePropsList = data => {
    this.setState({
      files: this.porpsList(data),
    });
  };

  handleToClose = (img) => {
    const { onChange } = this.props;
    const { files } = this.state;
    const filesArr = files.filter(item => item != img)
    this.setState({
      files: filesArr,
    });
    onChange && onChange(filesArr);
  };

  chooseImage = () => {
    const { onChange } = this.props;
    const { files } = this.state;
    Taro.chooseVideo({
      sourceType: ['album', 'camera'],
      success: (res) => {
        Taro.showLoading({
          title: '加载中',
        })
        let param = {
          type: 'mp4',
          name: 'code'
        };
        let data
        if (process.env.TARO_ENV === 'h5') {
          data = res.tempFilePaths[0]
        } else {
          data = res.tempFilePath
        }
        request.upload(UPLOADHOST, data, true, param, true).then(res => {
          if (res) {
            let filesArr = [...files, res]
            this.setState({
              files: filesArr
            });
            Taro.hideLoading()
            console.log(filesArr)
            onChange && onChange(filesArr);
          }
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
        console.log('上传失败，请重试', err)
        Taro.showToast({
          title: '上传失败，请重试',
          icon: 'none',
          duration: 2000
        })
      },
    });
  };

  onFullscreenChange = (e) => {
    const { fullScreen } = e.detail;
    this.props.onFullscreenChange && this.props.onFullscreenChange(fullScreen)
  }

  render() {
    let { files } = this.state;
    let { title = '添加视频', icon } = this.props;
    return (
      <View className="uploadVideo">
        {files.length > 0 ? <View className="uploadList at-row at-row--wrap">
          {files.map(item => {
            return (<View className="at-col at-col-4 uploadItem" key={item}>
              <View className="uploadImg">
                <View className="uploadDel" onClick={() => { this.handleToClose(item) }}>
                  <AtIcon value="close-circle" size="22" color="#F2544E" />
                </View>
                <Video className="Video" src={item} controls={true} onFullscreenChange={this.onFullscreenChange} />
              </View>
            </View>)
          })}
          <View className="at-col at-col-4 uploadItem " >
            <View className="uploadAdd" onClick={this.chooseImage}>
              <AtIcon value="camera" size="34" color="#F2544E" />
              <Text className="uploadText">上传视频</Text>
            </View>
          </View>
        </View>
          : <View className="uploadView">
            <View className="pic" onClick={this.chooseImage}>
              <View className="picTitle">
                <Text className={classnames(['iconfont', 'picIcon', icon || 'icontianjiazhaopian'])}
                ></Text>
                <Text>{title}</Text>
              </View>
              <Text className="picInfo">点击打开相册或相机</Text>
            </View>
          </View>}
      </View>
    );
  }
}
