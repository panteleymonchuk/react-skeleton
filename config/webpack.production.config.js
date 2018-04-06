import webpack from 'webpack';
import Config from 'webpack-config';
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default new Config().extend('./config/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 6,
        compress: true,
        warning: 'verbose'
      }
    })]
});