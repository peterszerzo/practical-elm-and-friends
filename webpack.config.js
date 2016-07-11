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
  devtool: 'source-map'
};
