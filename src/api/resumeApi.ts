import request from '../utils/request';

export default {
  /** 获取简历详情*/
  getResumeDetail: params => request.post('/s/aunt/queryAuntDetail', params, {}),
  /** 保存简历第一步*/
  saveAuntByFirstStep: params => request.post('/s/aunt/saveAuntByFirstStep', params, {}),
  /** 保存简历第二步*/
  saveAuntBySecondStep: params => request.post('/s/aunt/saveAuntBySecondStep', params, {}),
  /** 保存简历第三步*/
  saveAuntByThirdStep: params => request.post('/s/aunt/saveAuntByThirdStep', params, {}),
  /** 查询数据字典*/
  queryDictionary: params => request.post('/s/product/queryDictionary', params, {}),
  /** 保存简历*/
  saveAunt: params => request.post('/s/aunt/saveAunt', params, {}),
  /**招募家政员*/
  auntpossibleAdd: params => request.post('/s/auntpossible/add', params, {}),
  // 查询简历编辑字典参数
  getCommonOption1: params => request.post(`/core/auntcommonoption/getCommonOption`, params, {}),
  //查询标签列表(带分页)
  getShopLibrary: params => request.post(`/s/shoplibrary/queryPageList`, params, {}),
};
