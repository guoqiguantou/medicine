import Taro from '@tarojs/taro';
import commonInfo from './common';

let request: any = {},
  systemSource = 'mini';
export interface RequestObjectType {
  needToken?: boolean; // 是否需要登录
  loadingObj?: {
    needLoading?: boolean; // 是否需要loading
    title?: string; // loadding的title
  };
  navicateUrl?: ''; // 未登录时页面跳转链接, 默认 index  在commonInfo.reLogin中使用
  needRandom?: boolean; // 是否需要随机数， 避免重复请求出现点击太快的提示
  needLoading?: boolean; // 是否显示loading
  loadingTitle?: string;
  completeCallback: (value: any) => void;
}

interface HeaderType {
  Accept: string;
  'Content-Type'?: string;
  systemSource: string;
  jwtjson?: string;
  Authorization?: string;
}
function getUrl(url, upload = false) {
  return (url.startsWith('https') || url.startsWith('http')) ? url : upload ? UPLOADHOST : APIHOST + url
}

/**
 * 请求公共入口
 * @param url         请求url
 * @param data        请求参数
 * @param method      请求类型
 * @param requestObj  请求拓展参数
 * @returns {Promise<any>}
 */
request.rq = (
  url: string,
  data,
  method: keyof Taro.request.method,
  requestObj: RequestObjectType,
): Promise<any> => {
  let headers: HeaderType = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    systemSource: systemSource
  };

  let params = data || {};

  if (requestObj.needRandom) params.random = commonInfo.randomString(); // 需要随机数

  if (requestObj.needToken && !commonInfo.getToken()) {
    commonInfo.reLogin(requestObj);
    return new Promise((resolve, reject) => {
      reject({ msg: '正在登陆...' });
    });
  }

  if (JWTJSON) {
    headers.jwtjson = commonInfo.getToken();
  } else {
    headers.Authorization = commonInfo.getToken();
  }


  if ('POST' == method) {
    params = JSON.stringify(params);
  }

  if (requestObj.needLoading) {
    let _title = requestObj.loadingTitle || '加载中...';
    if (requestObj.needLoading || requestObj.loadingTitle)
      Taro.showLoading({ title: _title });
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: getUrl(url),
      method: method,
      data: params,
      header: headers,
      dataType: 'json',
      success: resp => {
        if (resp.statusCode == 200) {
          let data = resp.data;
          if (
            (data.rescode == '202' && data.msg == '未登录') ||
            data.msg == '未登录'
          ) {
            // commonInfo.reLogin();
            reject('正在登陆...');
          } else {
            if (url.indexOf('core/auntcommonoption/getCommonOption') > -1) {
              resolve(data) // 接口未按规范来，  要特殊处理一下
            }
            if (
              url.indexOf('restapi.amap.com') > -1 ||
              url.indexOf('arena.bm001.com') > -1 ||
              url.indexOf('easy-mock.com') > -1
            ) {
              resolve(data);
            } else {
              data.result === 'ok' ? resolve(data.data) : reject(data);
            }
          }
        } else if (resp.statusCode == 202) {
          console.error('rq-fail202-' + url + '-' + JSON.stringify(resp));
          commonInfo.reLogin();
          reject('正在登陆...');
        } else {
          console.error('rq-fail-else-' + url + '-' + JSON.stringify(resp));
          reject({ msg: '网络请求发生异常,错误码:' + resp.statusCode });
        }
      },
      fail: resq => {
        console.error('rq-fail-' + url + '-' + JSON.stringify(resq));
        reject(resq.errMsg);
      },
      complete: _compl => {
        (requestObj.loadingTitle || requestObj.needLoading) &&
          Taro.hideLoading();
        requestObj.completeCallback && requestObj.completeCallback(_compl);
      },
    });
  });
};

request.get = (url, data, reObj = {}) => {
  return request.rq(url, data, 'GET', reObj);
};

request.post = (url, data, reObj: RequestObjectType) => {
  return request.rq(url, data, 'POST', reObj);
};

request.up = (url, file, needToken, formData) => {
  let headers: HeaderType = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    systemSource: systemSource,
  };
  if (needToken && !commonInfo.getToken()) {
    commonInfo.reLogin();
    return new Promise(function (resolve, reject) {
      reject({
        msg: '正在登陆...',
      });
    });
  } else if (needToken) {
    if (JWTJSON) {
      headers.jwtjson = commonInfo.getToken();
    } else {
      headers.Authorization = commonInfo.getToken();
    }
  }
  console.log('url:' + url, file);
  console.log('headers:' + JSON.stringify(headers));
  console.log(url, file, formData)
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: getUrl(url, true),
      name: 'code',
      formData: formData,
      header: headers,
      filePath: file,
      success: resp => {
        if (resp.statusCode == 200) {
          let data = '';
          if (typeof resp.data == 'string') {
            data = JSON.parse(resp.data);
          } else {
            data = resp.data;
          }
          if (data.rescode == '202' && data.msg == '未登录') {
            commonInfo.reLogin();
            reject('正在登陆...');
          } else {
            data.result === 'ok' ? resolve(data.data) : reject(data);
          }
        } else {
          reject({
            msg: '网络请求发生异常,错误码:' + resp.statusCode,
          });
        }
      },
      fail: res => {
        // console.log('upload fail ', JSON.stringify(res));
        reject(res.errMsg);
      },
    });
  });
};

//兼容h5的上传=>taro-h5的Taro.uploadFile 只是将blobUrl转化成blob对象，
//我们后台只接受file流;这边将blob再转换成file流 再传入formData
request.upH5 = (url, blobUrl, needToken, formdata, isVideo) => {
  let headers: HeaderType = {
    Accept: 'application/json',
    systemSource: systemSource,
  };
  if (needToken && !commonInfo.getToken()) {
    commonInfo.reLogin();
    return new Promise(function (resolve, reject) {
      reject({
        msg: '正在登陆...',
      });
    });
  } else if (needToken) {
    if (JWTJSON) {
      headers.jwtjson = commonInfo.getToken();
    } else {
      headers.Authorization = commonInfo.getToken();
    }
  }

  return new Promise((resolve, reject) => {
    return commonInfo.convertObjectUrlToBlob(blobUrl).then(blob => {
      let extension = blob.type.split('/')[1]
      if (isVideo) {
        extension = 'mp4'
      }
      let file = new File([blob], blob.name || `file-${Date.now()}-.${extension}`)
      let formData = new FormData();
      formData.append("code", file);
      for (const key in formdata) {
        if (Object.prototype.hasOwnProperty.call(formdata, key)) {
          formData.append(key, formdata[key]);
        }
      }
      // return request.post(url, formData, { 'Content-Type': 'application/form-data;charset=utf-8', })
      let xhr = new XMLHttpRequest();
      xhr.open('POST', getUrl(url, true))
      commonInfo.setHeader(xhr, headers)
      xhr.onload = () => {
        let response = xhr.responseText || xhr.response
        const status = xhr.status;
        if (typeof response == 'string') {
          response = JSON.parse(response);
        } else {
          response = response;
        }
        if (status == 200) {
          if (response.rescode == '202' && response.msg == '未登录') {
            commonInfo.reLogin();
            reject('正在登陆...');
          } else {
            response.result === 'ok' ? resolve(response.data) : reject(response);
          }
        } else {
          reject({
            msg: '网络请求发生异常,错误码:' + status,
          });
        }
      }
      xhr.onerror = () => {
        reject({
          msg: '网络请求发生异常,错误码:' + xhr.status,
        });
      }
      xhr.send(formData);
    })
  });
};
/**
 * 上传文件
 * @param url  上传路径
 * @param file  文件
 * @param needToken  是否需要登录
 * @param formdata 自定义属性
 * @returns {Promise<unknown>}
 */

request.upload = (url, file, needToken = true, formdata, isVideo) => {
  return process.env.TARO_ENV === 'h5' ?
    request.upH5(url, file, needToken, formdata, isVideo) :
    request.up(url, file, needToken, formdata, isVideo);
};



export default request;
