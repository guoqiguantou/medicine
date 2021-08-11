import request from '../utils/request';

export default {
  getLogin: params => request.post('/api/login/account', params, {}),
  sendCode: params => request.post('/api/login/captcha', params, {}),
  queryAuntMine: params => request.post('/s/aunt/queryAuntMine', params, {}),
  globalconfigQuery: params => request.post('/s/globalconfig/query', params, {}),
  queryInviteList: params => request.post('/s/auntinvite/queryPageList', params, {}),
  getAllRewardCount: params => request.post('/s/auntinvite/getAllRewardCount', params, {}),
  querySharePoster: params => request.post('/s/shareposter/queryPageList', params, {}),
  getInviteUrl: params => request.post('/s/auntinvite/getInviteUrl', params, {}),
};
