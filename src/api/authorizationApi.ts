import request from '../utils/request';

export default {
  /** 发送验证码*/
  sendCode: params => request.post('/core/verify/appSend', params, {}),
  /** 登录 */
  login: params => request.post('/core/oauth/phoneLogin', params, {}),
  /** 小程序通过静默授权code获取openId */
  miniSilence: params => request.post('/core/grant/miniSilence', params, {}),
  /** 小程序用户解密资料检测并初始化 */
  miniExplicit: params => request.post('/core/grant/miniExplicit', params, {}),
  /** 小程序用户根据加密数据获取用户手机号并初始化*/
  miniPhone: params => request.post('/core/grant/miniPhone', params, {}),
  //h5静默授权
  h5Silence: params => request.post('/core/grant/subSilence', params, {}),
  //h5显式授权
  h5Explicit: params => request.post('/core/grant/subExplicit', params, {}),
};
