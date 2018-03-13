import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
let webpack = require('webpack');
// let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default new Config().merge({
  entry: './client/src/index.js',
  output: {
    path: __dirname + '/../client/public'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      inject: 'body'
    })
  ],
});