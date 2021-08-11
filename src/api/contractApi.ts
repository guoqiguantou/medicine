import request from '../utils/request';

export default {
  /** 获取合同详情*/
  getContractDetail: params => request.post('/s/contract/query', params, {}),
  /** 查询电子合同*/
  getEleccontractDetail: params => request.post('/s/eleccontract/queryElecContractById', params, {}),
  /** 签署电子合同*/
  getContractSign: params => request.post('/s/eleccontract/sign', params, {}),
};
