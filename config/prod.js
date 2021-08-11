module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    APIHOST: JSON.stringify('https://cloudapi.bm001.com/'),
    UPLOADHOST: JSON.stringify('https://cloudapi.bm001.com/core/upload/uploadPic'),
    WXAPPID: JSON.stringify('wx2c0522882c6cd836'),
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
