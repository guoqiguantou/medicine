import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/serviceApi';

export default modelExtend(common, {
  namespace: 'service',
  state: {
    cleanOrder: {}, //保洁单详情
  },

  effects: {
    /** 查询保洁单派单记录*/
    *getCleanOrder({ payload }, { put, select, call }) {
      const res = yield call(api.getCleanOrder, payload);
      yield put({
        type: 'updateState',
        payload: { cleanOrder: res },
      });
      return res;
    },
    /** 下工签到*/
    *endWorkSign({ payload }, { put, select, call }) {
      const res = yield call(api.endWorkSign, payload);
      yield put({
        type: 'getCleanOrder',
        payload: { id: payload.id },
      });
    },
    /** 上工签到*/
    *startWorkSign({ payload }, { put, select, call }) {
      const res = yield call(api.startWorkSign, payload);
      yield put({
        type: 'getCleanOrder',
        payload: { id: payload.id },
      });
    },
    /** 上传下工图片*/
    *saveEndWorkImgs({ payload }, { put, select, call }) {
      const res = yield call(api.saveEndWorkImgs, payload);
      yield put({
        type: 'getCleanOrder',
        payload: { id: payload.id },
      });
    },
    /** 上传上工图片*/
    *saveStartWorkImgs({ payload }, { put, select, call }) {
      const res = yield call(api.saveStartWorkImgs, payload);
      yield put({
        type: 'getCleanOrder',
        payload: { id: payload.id },
      });
    },
    *clearDetail({ payload }, { put, select, call }) {
      yield put({
        type: 'updateState',
        payload: { cleanOrder: {} },
      });
    },
  },
});
