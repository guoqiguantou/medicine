import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/resumeApi';

export default modelExtend(common, {
  namespace: 'findAunt',
  state: {
    JobIntensionsList: [],//求职工种
  },
  effects: {

    /** 查询在职工种数据字典*/
    * queryJobIntensionsListDictionary({ payload }, { put, call }) {
      const res = yield call(api.queryDictionary, {
        ...payload,
        'cateId': 11,
      });
      yield put({
        type: 'updateState',
        payload: { JobIntensionsList: res.dataList },
      });
    }, /** 提交阿姨意向*/
    * auntPossibleAdd({ payload }, { put, call }) {
      const res = yield call(api.auntpossibleAdd, {
        ...payload,
      });
      return true;
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});
