const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const config = {
  projectName: 'ehome-cloud-aunt-mp',
  date: '2020-9-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // '@tarojs/plugin-mock'
  ],
  defineConstants: {
    JWTJSON: 'false',
    APPID: JSON.stringify('wx777285ea85ec1149'),
    KEYID: JSON.stringify('3'),
    COMPANYID: JSON.stringify('G00001'),
    PUBLICKEY: JSON.stringify('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWLnQe9lX6VDRVCSPgoHS2rOZeeyTjAyjKcj9yKdX13PZaHGpexWQSsvFPvYSyasLyAIe9mq1yuEZUu5L1wmFuG2J0BX2ckFOp2nMlKJxmjsKOYA5wUEW4Re9cEcPCjysW8FxOM/MnCw65yHphqdn+sjABc969834I2YleKBuqHQIDAQAB'),
    AMAPKEY:JSON.stringify('8f3f1c71535aad743ff58cf8e397d28e'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  alias: {
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/models': path.resolve(__dirname, '..', 'src/models'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/images': path.resolve(__dirname, '..', 'src/assets/images'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/common': path.resolve(__dirname, '..', 'src/common'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/wx': path.resolve(__dirname, '..', 'src/wx')
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.merge({
        plugins: [
          // 剥离除 “en” 以外的所有语言环境。
          new MomentLocalesPlugin(),

          // 或者：剥离除 “en”、“es-us” 和 “ru” 以外的所有语言环境。
          //（“en” 内置于 Moment 中，无法移除）
          // new MomentLocalesPlugin({
          //   localesToKeep: ['es-us', 'ru'],
          // }),
        ],
        devServer: {
          // proxy: {
          //   "/api": "http://127.0.0.1:9527/api"
          // }
        }
      })
    }
    // webpackChain(chain, webpack) {
    //   chain.mode("production");
    //   chain.optimization.minimize(true);
    //   chain.plugin("terser").use(TerserPlugin, [
    //     {
    //       cache: true,
    //       extractComments: false,
    //       terserOptions: {
    //         output: {
    //           comments: false
    //         }
    //       }
    //     }
    //   ]);
    // }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
