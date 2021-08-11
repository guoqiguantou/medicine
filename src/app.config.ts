export default {
  pages: [
    'pages/index/index',
    'pages/contract/contract',
    'pages/login/login',
    'pages/login/attachment',
    'pages/mine/mine',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'wechart',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f5f5',
    navigationBarBackgroundColor: '#f5f5f5'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabBar/index-normal.png',
        selectedIconPath: 'assets/images/tabBar/index-select.png',
      },
      {
        pagePath: 'pages/contract/contract',
        text: '合同',
        iconPath: 'assets/images/tabBar/dd-normal.png',
        selectedIconPath: 'assets/images/tabBar/dd-select.png',
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: 'assets/images/tabBar/mine-normal.png',
        selectedIconPath: 'assets/images/tabBar/mine-select.png',
      },
    ],
    position: 'bottom',
    borderStyle: 'black',
    color: '#999999',
    selectedColor: '#f54949',
    backgroundColor: '#ffffff',
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于获取您的定位',
    },
  },
};
