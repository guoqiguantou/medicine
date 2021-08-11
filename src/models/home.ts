import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/homeApi';
import moment from 'moment'

export default modelExtend(common, {
  namespace: 'home',
  state: {
    taskCalendar: [],//任务日历
    taskList: [],//任务列表
  },

  effects: {
    /** 查询任务日历*/
    *queryTaskCalendar({ payload }, { put, select, call }) {
      const res = yield call(api.queryTaskCalendar, payload);
      const { dataList = [] } = res;
      const data = dataList.filter(item => item.num > 0).map(item => { return moment(item.date).format("YYYY-MM-DD") })
      yield put({
        type: 'updateState',
        payload: { taskCalendar: data },
      });
    },
    /** 查询任务列表*/
    *queryTaskList({ payload }, { put, select, call }) {
      const res = yield call(api.queryTaskList, payload);
      const { dataList = [] } = res;
      yield put({
        type: 'updateState',
        payload: { taskList: dataList },
      });
    },
  }
});
