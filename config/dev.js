module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    APIHOST: JSON.stringify('https://cloudapitest.bm001.com/'),
    UPLOADHOST: JSON.stringify('https://cloudapitest.bm001.com/core/upload/uploadPic'),
    WXAPPID: JSON.stringify('wx2c0522882c6cd836'),
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      port: 8080
    }
  }
}
