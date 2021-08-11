import { Request, Response } from 'express';


export interface TableListItem {
  key: number;
  type: string,
  stime: string,
  etime: string,
  id: string,
  price: number,
  status: number,
  name: string
}
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: TableListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      "addUserId": "string",
      "addUserName": "string",
      "address": "软件谷创业园C区",
      "auntId": "string",
      "auntName": "string",
      "cancelType": 0,
      "city": "南京市",
      "cityId": 0,
      "cleanOrderId": "R346345745845794599",
      "district": "雨花台区",
      "districtId": 0,
      "endWorkImgs": "string",
      "endWorkSignAddress": "string",
      "id": 'w12323efrtrytu656565654',
      "idList": [
        0
      ],
      productName: '临时保洁',
      productAttrName : '3小时',
      "maxAddTime": "string",
      "minAddTime": "string",
      "pageNum": 0,
      "pageSize": 0,
      "province": "江苏省",
      "provinceId": 0,
      "sortInfos": [
        {
          "field": "string",
          "sort": "string"
        }
      ],
      serviceTime: 1604027620234,
      "startWorkImgs": "string",
      "startWorkSignAddress": "string",
      "state": 0
    });

  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req: Request, res: Response, u: string) {
  const pageNum = parseInt(req.query.pageNum) || 0;
  const pageSize = parseInt(req.query.pageSize) || 10;

  let dataSource = tableListDataSource.slice(
    (pageNum as number) * (pageSize as number),
    ((pageNum as number) + 1) * (pageSize as number),
  );
  const result = {
    dataList: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize: pageSize,
    pageNum,
  };

  return res.json({
    data: result,
    result: 'ok'
  });
}


export default {
  'GET /api/rule': getRule,
  'POST /api/service': getRule,
};
