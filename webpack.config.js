const path = require('path');
const webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');
//PROD = 1;
module.exports = {
  entry: './app/app.js',
  output: {
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
    }
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ] : [],
  devServer:{
    // lazy: false,
    // filename:"bundle.js"
  }
};
