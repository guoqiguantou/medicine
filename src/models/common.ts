import api from '../api/commonApi'
import Common from '@/utils/common'

export default {
  namespace: 'common',
  state: {
    companyInfo: {},
    shopInfo: {},
  },
  effects: {
    /**上传图片 */
    * uploadPhoto({ payload }, { select, call, put }) {
      const result = yield call(api.uploadPhoto, payload)
      return result
    },
    /**身份证图片识别 */
    * getIdCardFullInfo({ payload }, { select, call, put }) {
      const result = yield call(api.getIdCardFullInfo, payload)
      yield put({
        type: 'updateState',
        payload: { IdCardFullInfo: result }
      })
      return result
    },
    /**身份证数字识别 */
    * getIdCardBaseInfo({ payload }, { select, call, put }) {
      const result = yield call(api.getIdCardBaseInfo, payload)
      yield put({
        type: 'updateState',
        payload: { IdCardFullInfo: result }
      })
      return result
    },
    /**内容转换 */
    * contentMapping({ payload }, { select, call, put }) {
      const result = yield call(api.contentMapping, payload)
      yield put({
        type: 'updateState',
        payload: { content: result }
      })
      return result
    },
    /*获取公司信息*/
    * getCompanyById({ payload }, { select, call, put }) {
      const result = yield call(api.getCompanyById, { id: Common.getCompanyId() })
      yield put({
        type: 'updateState',
        payload: {
          companyInfo: result,
        }
      })
      return result
    },
    // 缩短小程序参数
    * contentMappingAdd({ payload }, { select, call, put }) {
      const result = yield call(api.contentMappingAdd, payload)
      return result
    },
    // 获取门店信息
    * getShopById({ payload }, { select, call, put }) {
      const result = yield call(api.getShopById, { id: Common.getShopId() })
      yield put({
        type: 'updateState',
        payload: {
          shopInfo: result,
        }
      })
      return result
    },
    // 获取
    * geocode({ payload }, { select, call, put }) {
      const result = yield call(api.geocode, payload)
      return result.dataList
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
