// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8082,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/login': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      },
      '/isLogin': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/isLogin': '/isLogin'
        }
      },
      '/logout': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/logout': '/logout'
        }
      },
      '/getLoginUser': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getLoginUser': '/getLoginUser'
        }
      },
      '/getCompanyInfo': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getCompanyInfo': '/getCompanyInfo'
        }
      },
      '/getDevLst': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getDevLst': '/getDevLst'
        }
      },
      '/getWarnLstByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getWarnLstByDevId': '/getWarnLstByDevId'
        }
      },
      '/getBasicInfoByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getBasicInfoByDevId': '/getBasicInfoByDevId'
        }
      },
      '/getUsageByClientNoAndStartTimeAndEndTime': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getUsageByClientNoAndStartTimeAndEndTime': '/getUsageByClientNoAndStartTimeAndEndTime'
        }
      },
      '/initDevByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/initDevByDevId': '/initDevByDevId'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
