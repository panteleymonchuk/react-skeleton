import Config, { environment } from 'webpack-config';

console.log('process', process.env.NODE_ENV);

environment.setAll({
  env: () => process.env.NODE_ENV
});

export default new Config().extend('./config/webpack.[env].config.js');