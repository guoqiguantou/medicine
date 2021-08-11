import { parseQueryUrl } from '@/utils/stringUtil';
import authorizationApi from '@/api/authorizationApi';
import common from '@/utils/common';
import Taro from '@tarojs/taro';
import tip from '@/utils/tip';

export default async function () {
  let uri = 'http://wx-test.bm001.com/#/pages/login/login';
  const state = parseQueryUrl("state")
  const code = parseQueryUrl("code")
  if (common.getOpenId()) return;

  async function init() {
    const params = {
      appId: WXAPPID,
      code: code,
      companyId: common.getCompanyId(),
      shopId: common.getShopId(),
      userType: 6
    };
    return state == 1 ? await authorizationApi.h5Silence(params) : await authorizationApi.h5Explicit(params);
  }

  function step(state) {
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${WXAPPID}&redirect_uri=${encodeURIComponent(uri)}&response_type=code&scope=${(state == 2) ? 'snsapi_userinfo' : 'snsapi_base'}&state=${state}#wechat_redirect`;
  }

  async function getData() {
    if (!state) {
      step(1);
      return false
    }
    let res = await init()
    const { token, openid, user, actType } = res;
    if (actType == 1) {
      step(2)
    } else if (actType == 2) {
      tip.showTips('请使用手机号登录绑定');
      common.setOpenId(openid);
    } else if (actType == 3) {
      tip.showTips('登陆成功');
      common.setOpenId(openid);
      return res
    }
  }

  return await getData();
}
//1、state 不存在  =>step(1)  获取code
//2、state==1 静默请求 获取actType 1  =>step(2)        
//3、state==2 显式授权 授权用户信息及code   actType 2 => 手机号登陆加openId


