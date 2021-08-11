import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/contractApi';

export default modelExtend(common, {
  namespace: 'contract',
  state: {
    contractDetail: {},//合同详情
    eleccontractDetail: {}//电子合同
  },
  effects: {
    /** 查询合同详情*/
    *queryContractDetail({ payload }, { put, select, call }) {
      const res = yield call(api.getContractDetail, payload);
      yield put({
        type: 'updateState',
        payload: { contractDetail: res },
      });
    },
    *clearDetail({ payload }, { put, select, call }) {
      yield put({
        type: 'updateState',
        payload: { contractDetail: {} },
      });
    },
    /** 查询电子合同*/
    *getEleccontractDetail({ payload }, { put, select, call }) {
      const res = yield call(api.getEleccontractDetail, payload);
      yield put({
        type: 'updateState',
        payload: { eleccontractDetail: res },
      });
    },
    /** 签署电子合同*/
    *getContractSign({ payload }, { put, select, call }) {
      const res = yield call(api.getContractSign, payload);
      yield put({
        type: 'updateState',
        payload: { eleccontractDetail: res },
      });
    },

  },
});
