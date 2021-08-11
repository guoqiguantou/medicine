import api from '../api/orderApi'

export default {
  namespace: 'order',
  state: {
    detail: {},
    companyInfo: {}
  },
  effects: {
    * getNow({ payload }, { select, call, put }) {
      const result = yield call(api.fetchNow, payload)
      console.log(result, '111111')
      return result;
    },
    * getFetcherInfoDetail({ payload }, { select, call, put }) {
      const result = yield call(api.fetchInfoDetail, payload)
      yield put({
        type: 'updateState',
        payload: { detail: result }
      })
      console.log(result)
      return result
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
