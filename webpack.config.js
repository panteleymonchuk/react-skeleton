let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      inject: 'body'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 6,
        compress: true,
        warning: 'verbose'
      }
    })
  ],
};