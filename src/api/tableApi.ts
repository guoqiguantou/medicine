import request from '../utils/request';

export default {
  /** 获取合同列表*/
  getContractList: params => request.post('/s/contract/queryPageList', params, {}),
  /** 获取地址列表*/
  getGeoPlaceList: params => request.post('/geo/place/text', params, {}),
  /** 获取服务单列表*/
  getServiceList: params => request.post('/s/cleanOrder/queryPageList', params, {}),
  /** 获取抢单列表*/
  getFetcherInfoList: params => request.post('/s/clueRecruit/queryPage', params, {}),
};
