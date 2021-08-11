import request from '../utils/request';
var apiMap = {
  getFetcherInfoList: '/s/clueRecruit/queryPage',
  getFetchInfoDetail: '/s/clueRecruit/query',
  fetchNow: '/s/clueRecruit/grab',
};

export default {
    queryTranscribe: params => request.post('/s/course/queryLive', params, {}),
    ///获取用户资料
    miniDecode: params => request.post('/core/grant/miniDecode', params, {}),
    getFetcherInfoList: params => request.post(apiMap.getFetcherInfoList, params, {}),
    fetchInfoDetail: params => request.post(apiMap.getFetchInfoDetail, params, {}),
    fetchNow: params =>{return  request.post(apiMap.fetchNow, params, {}).then((res)=>{
        return res
      },(d)=>{
        throw d
      });
    }
};
