const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');

const rootpath = path.resolve(__dirname,"../");

const config = {
  entry: path.resolve(rootpath,"src","index.js"),
  devtool: 'inline-source-map',
  output: {
    filename: 'BOSEngine.min.js',
    path: path.resolve(rootpath,"min"),
    library: 'BOSEngine',
    libraryTarget: 'umd'
  },
  module: {
    rules:[
      { 
        test: require.resolve('../src/assets/sdk/third/jquery-1.10.2.min.js'),
        use:[
          { 
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      }
    ]
  },
  externals: {
    // jquery: "jQuery",          //如果要全局引用jQuery，不管你的jQuery有没有支持模块化，用externals就对了。
    // $: "jQuery",
    // BIMVIZ: "BIMVIZ"
    // './button': './button',
    // './core': './core',
    // './draggable': './draggable',
    // './mouse': './mouse',
    // './position': './position',
    // './resizable': './resizable',
    // './widget': './widget',
  },
}

module.exports = config;