import request from '../utils/request';
export default {
  /*上传图片*/
  uploadPhoto: file =>
    request.upload(UPLOADHOST, file, {}),
  /**身份证数字识别 */
  getIdCardBaseInfo: params =>
    request.post('/core/idcard/getIdCardBaseInfo', params, {}),
  /**内容映射 */
  contentMapping: params =>
    request.post('/core/contentmapping/query', params, {}),
  /**身份证图片识别 */
  getIdCardFullInfo: file =>
    request.upload(`${APIHOST}/core/idcard/getIdCardFullInfo`, file),
  /*获取公司信息 */
  getCompanyById: params => request.post('/s/company/queryById', params, {}),
  /**内容映射 */
  contentMappingAdd: params => request.post('/core/contentmapping/add', params, {}),
  /*获取门店信息 */
  getShopById: params => request.post('/c/shop/query', params, {}),
  /*查询微信配置 */
  queryWXConfig: params => request.post('/core/wechatconf/queryShareConfig', params, {}),
  //根据经纬度获取位置
  geocode: params => request.post('/geo/place/around', params, {}),

};
