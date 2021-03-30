const title = 'huajian-charts';
const isPro = process.env.NODE_ENV === 'production';

const CompressionWebpackPlugin = require('compression-webpack-plugin')

const {
  resolve
} = require('path');

module.exports = {
  publicPath: isPro ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: !isPro, // 是否启用Eslint
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    hotOnly: true,
    // 浏览器显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
  },
  configureWebpack: config => {
    config.mode = process.env.NODE_ENV;
    let plugins = [];
    // 开启gzip压缩
    plugins.push(
      new CompressionWebpackPlugin({
        filename: info => {
          return `${info.path}.gz${info.query}`
        },
        algorithm: 'gzip',
        threshold: 10240,
        test: new RegExp(
          '\\.(' + ['js'].join('|') +
          ')$'
        ),
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    )
    // let rules = [{
    //     test: /\.scss$/,
    //     use: ['style-loader', 'css-loader', 'sass-loader']
    //   },
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     use: [{
    //       loader: 'url-loader',
    //       options: {
    //         limit: 1024 * 5,
    //         name: 'img/[name].[ext]'
    //       }
    //     }]
    //   }, {
    //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //     use: [{
    //       loader: 'url-loader',
    //       options: {
    //         limit: 1024 * 10,
    //         name: 'fonts/[name].[hash:8].[ext]'
    //       }
    //     }]
    //   }
    // ]
    // config.module.rules = [
    //   ...config.module.rules,
    //   ...rules
    // ]
    if (isPro) {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ];
  },
  chainWebpack: (config) => {
    // 配置路径别名
    config.resolve.alias.set('@', resolve('./src'));

    // 设置title
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = title;
        return args;
      });

    if (isPro) {
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      });
    }
  },
  css: {
    extract: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve(__dirname, './src/css/variable.scss')
      ]
    }
  },
}