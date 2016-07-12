'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./build'),
    publicPath: '',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [new webpack.optimize.UglifyJsPlugin()] : [],
  devtool: 'source-map'
};
