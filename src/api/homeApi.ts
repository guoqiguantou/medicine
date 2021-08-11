import request from '../utils/request';

export default {
  /** 查询任务日历*/
  queryTaskCalendar: params => request.post('/s/task/queryTaskCalendar', params, {}),
  /** 查询任务列表*/
  queryTaskList: params => request.post('/s/task/queryTaskList', params, {}),

};
