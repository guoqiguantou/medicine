import request from '@/utils/request';
import apiMap from '@/api/commonApi';

export default class WxConfig {
  static async initConfig() {
    let res = await apiMap.queryWXConfig({ appId: WXAPPID, requestUrl: window.location.href.split("#")[0] })
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonceStr, // 必填，生成签名的随机串
      signature: res.signature,// 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'openLocation',
        'getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
  }
}
