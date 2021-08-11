import api from '../api/tableApi'

export interface TableModelState {
}

export interface TableModelType {
  namespace: string;
  state: TableModelState;
  effects: {
    getContractList;
    getGeoPlaceList;
    getServiceList;
    getFetcherInfoList;
  };
  reducers: {
    setTable,
  };
}

const TableModel: TableModelType = {
  namespace: 'table',
  state: {
    contract_list: {},
    nav_list: {},
    service_list: {},
    fetcherInfo_list: {}
  },
  effects: {
    /** 获取合同列表*/
    *getContractList({ payload }, { put, select, call }) {
      let resdata = yield call(api.getContractList, payload)
      return yield getTable({ resdata, payload }, { put, select }, 'contract_list')
    },
    /** 获取导航列表*/
    *getGeoPlaceList({ payload }, { put, select, call }) {
      let resdata = yield call(api.getGeoPlaceList, payload)
      return yield getTable({ resdata, payload }, { put, select }, 'nav_list')
    },
    /** 获取服务单列表*/
    *getServiceList({ payload }, { put, select, call }) {
      let resdata = yield call(api.getServiceList, payload)
      return yield getTable({ resdata, payload }, { put, select }, 'service_list')
    },
    /** 获取抢单列表*/
    *getFetcherInfoList({ payload }, { put, select, call }) {
      let resdata = yield call(api.getFetcherInfoList, payload)
      return yield getTable({ resdata, payload }, { put, select }, 'fetcherInfo_list')
    },

  },
  reducers: {
    setTable(state, { payload: { page_list } }) {
      return { ...state, ...page_list };
    },
  },
};
const getTable = function* ({ resdata, payload }, { put, select }, tableName) {
  let data = resdata.dataList;
  let total = resdata.totalCount;
  let init = payload.pageNum == 0 ? true : false
  //加载更多
  if (!init) {
    let oldPage = yield select((state: any) => {
      return state.table[tableName]?.data || [];
    })
    data = oldPage.concat(data)
  }
  let nodata = data.length >= total;
  //后台数据没有传总条数情况下，前端判断
  if (resdata.dataList.length == 0) {
    nodata = true;
  }
  let page_list = {
    [tableName]: {
      data,
      payload,
      total,
      init,
      nodata
    }
  }
  yield put({
    type: 'setTable',
    payload: { page_list: page_list }
  })
  return data
}
export default TableModel
