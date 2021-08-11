import modelExtend from 'dva-model-extend';
import common from '@/models/common';
import api from '@/api/authorizationApi';

export default modelExtend(common, {
  namespace: 'authorization',
  state: {},

  effects: {
    *sendCode({ payload }, { put, select, call }) {
      yield call(api.sendCode, payload);
      yield put({
        type: 'updateStore',
        payload: {},
      });
    },
    *login({ payload }, { put, select, call }) {
      const result = yield call(api.login, payload);
      yield put({
        type: 'updateStore',
        payload: {},
      });
      return result;
    },
    *miniSilence({ payload }, { put, select, call }) {
      const result = yield call(api.miniSilence, payload);
      yield put({
        type: 'updateStore',
        payload: {},
      });
      return result;
    },
    *miniExplicit({ payload }, { put, select, call }) {
      const result = yield call(api.miniExplicit, payload);
      yield put({
        type: 'updateStore',
        payload: {},
      });
      return result;
    },
    *miniPhone({ payload }, { put, select, call }) {
      const result = yield call(api.miniPhone, payload);
      yield put({
        type: 'updateStore',
        payload: {},
      });
      return result;
    },
  },

  reducers: {
    updateStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});
