import Config from 'webpack-config';

export default new Config().extend('./config/webpack.base.config.js').merge({
  mode: 'development',
  output: {
    filename: 'bundle.js'
  }
});