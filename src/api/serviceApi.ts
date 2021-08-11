import request from '../utils/request';

export default {
  /** 查询保洁单派单记录*/
  getCleanOrder: params => request.post('/s/cleanOrder/query', params, {}),
  /** 下工签到*/
  endWorkSign: params => request.post('/s/cleanOrder/endWorkSign', params, {}),
  /** 上工签到*/
  startWorkSign: params => request.post('/s/cleanOrder/startWorkSign', params, {}),
  /** 上传下工图片*/
  saveEndWorkImgs: params => request.post('/s/cleanOrder/saveEndWorkImgs', params, {}),
  /** 上传上工图片*/
  saveStartWorkImgs: params => request.post('/s/cleanOrder/saveStartWorkImgs', params, {}),
};
