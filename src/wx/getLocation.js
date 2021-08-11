import Taro from '@tarojs/taro';

const ENV = Taro.getEnv();


export default function (success, error) {
  if (ENV === 'WEB') {
    window.wx.checkJsApi({
      jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function (res) {
        const { getLocation: location } = res.checkResult || {};
        if (location) {
          window.wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
              success && success(res);
            },
          });
        } else {
          error && error('无权限获取地理位置');
        }
      },
      fail: (res) => {
        error && error('无权限获取地理位置');
      }
    });
  } else if (ENV === 'WEAPP') {
    Taro.getLocation({
      type: 'gcj02', //返回可以用于 Taro.openLocation的经纬度
      success: (res) => {
        success && success(res);
      },
      fail: (res) => {
        console.log('location err ', res);
        if (res.errMsg.indexOf('auth deny') !== -1) {
          error && error(res);
        }
      },
    });
  }


}
