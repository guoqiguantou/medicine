import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/resumeApi';
import commonUtil from '@/utils/common';

export default modelExtend(common, {
  namespace: 'resume',
  state: {
    ResumeDetail: {}, //简历详情
    JobIntensionsList: [], //求职工种
    fullscreen: false, //视频全屏
    op: {
      workTimeList: [],
      WorkingLifeDataArr: [],
      education: [],
      marriedList: [],
      mandarinAbleList: [],
      visaList: [],//签证
      bloodTypeList: [],//血型
    },
    opCustom: {
      auntCertTextListCustom: [],
      compositeListCustom: [],
    }
  },
  effects: {
    /** 查询简历详情*/
    * queryResumeDetail({ payload }, { put, select, call }) {
      const res = yield call(api.getResumeDetail, payload);
      yield put({
        type: 'updateState',
        payload: { ResumeDetail: res },
      });
    },
    /** 保存阿姨简历*/
    * saveAunt({ payload }, { put, select, call }) {
      const res = yield call(api.saveAunt, {
        ...payload,
        shopId: commonUtil.getShopId(),
      });
      yield put({
        type: 'updateState',
        payload: { ResumeDetail: res },
      });
    },
    /** 查询在职工种数据字典*/
    * queryJobIntensionsListDictionary({ payload }, { put, select, call }) {
      const res = yield call(api.queryDictionary, {
        ...payload,
        cateId: 11,
        companyId: commonUtil.getCompanyId(),
      });
      yield put({
        type: 'updateState',
        payload: { JobIntensionsList: res.dataList },
      });
    },
    * setFullscreen({ payload }, { put, select, call }) {
      yield put({
        type: 'updateState',
        payload: { fullscreen: payload },
      });
    },
    /**查询简历编辑字典参数 */
    * getCommonOption({ payload }, { select, call, put }) {
      const result = yield call(api.getCommonOption1, payload);
      yield put({
        type: 'updateState',
        payload: {
          op: {
            ...result,
            WorkingLifeDataArr: result.workingLifeItems.map(item => ({
              id: item.value,
              name: item.text,
            })) || [],
            education: result.education.map(item => item.text) || [],
            marriedList: result.marriedList.map(item => item.text) || [],
            mandarinAbleList: result.mandarinAbleList.map(item => item.text) || [],
            visaList: result.visaList.map(item => item.text) || [],
            bloodTypeList: result.bloodTypeList.map(item => item.text) || [],
          }
        }
      })
      return result
    },
    /**查询自定义标签*/
    * getShopLibrary({ payload }, { select, call, put }) {
      //个人技能
      const compositeListCustom = yield call(api.getShopLibrary, {
        pageNum: 0,
        pageSize: 100,
        type: 3
      });

      //专业证书
      const auntCertTextListCustom = yield call(api.getShopLibrary, {
        pageNum: 0,
        pageSize: 100,
        type: 4
      });
      yield put({
        type: 'updateState',
        payload: {
          opCustom: {
            compositeListCustom: compositeListCustom?.dataList.map(item => item.content) || [],
            auntCertTextListCustom: auntCertTextListCustom?.dataList.map(item => item.content) || [],
          }
        }
      })
    }
  },
});
