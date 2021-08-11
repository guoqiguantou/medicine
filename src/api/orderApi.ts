import request from '../utils/request';


export default {
  /** 获取详情*/
  fetchInfoDetail: params => request.post('/s/clueRecruit/query', params, {}),
  /** 抢单*/
  fetchNow: params => request.post('/s/clueRecruit/grab', params, {}),
};
