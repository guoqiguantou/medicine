import Taro from '@tarojs/taro';

export default {
  showTips: (title: string, icon = 'none', duration = 1000) => {
    Taro.showToast({
      title,
      icon:
        icon === 'success'
          ? 'success'
          : icon === 'loading'
            ? 'loading'
            : 'none',
      duration,
    });
  }
};
