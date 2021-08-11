import api from '@/api/userApi';

export default {
  namespace: 'mine',
  state: {
    mineInfo: {},
    globalConfig: {},
    allRewardCount: {},
    posterInfo: {},
    invateUrlInfo: {},
  },
  effects: {
    * queryAuntMine({ payload }, { call, put }) {
      const result = yield call(api.queryAuntMine, payload);
      yield put({
        type: 'updateState',
        payload: { mineInfo: result || {} }
      })
      return result
    },
    * globalConfigQuery({ payload }, { call, put }) {
      const result = yield call(api.globalconfigQuery, payload);
      yield put({
        type: 'updateState',
        payload: { globalConfig: result || {} }
      })
      return result
    },
    * getAllRewardCount({ payload }, { call, put }) {
      let result = yield call(api.getAllRewardCount, payload);
      yield put({
        type: 'updateState',
        payload: { allRewardCount: result || {} }
      });
      return result
    },
    * querySharePoster({ payload }, { call, put }) {
      let result = yield call(api.querySharePoster, payload);
      if (result.dataList && result.dataList.length > 0) {
        yield put({
          type: 'updateState',
          payload: { posterInfo: result.dataList[0] || {} }
        });
        return result.dataList[0]
      }
    },
    * getInviteUrl({ payload }, { call, put }) {
      let result = yield call(api.getInviteUrl, payload);
      yield put({
        type: 'updateState',
        payload: { invateUrlInfo: result || {} }
      });
      return result
    },

    * changeVal({ payload }, { put }) {
      yield put({
        type: 'updateState',
        payload: { ...payload }
      })
    },

  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload, }
    },
  },
};
