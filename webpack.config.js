var webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};