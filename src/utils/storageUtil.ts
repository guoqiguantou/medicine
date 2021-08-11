import Taro from '@tarojs/taro';

export default {
  set: (key: string, data: any) => {
    Taro.removeStorageSync(key);
    Taro.setStorageSync(key, data);
  },

  getWithDel: key => {
    let data = Taro.getStorageSync(key);
    Taro.removeStorage(key);
    return data || '';
  },

  get: (key: string) => {
    let data = Taro.getStorageSync(key);
    return data || '';
  },

  remove: (key: string) => {
    Taro.removeStorageSync(key);
  },
};
