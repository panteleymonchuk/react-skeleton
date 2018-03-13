import Config, { environment } from 'webpack-config';

// process.env.NODE_ENV - доступен если в packege.json указать 'export NODE_ENV' для OS X, или SET для windows
environment.setAll({
  env: () => process.env.NODE_ENV
});

export default new Config().extend('./config/webpack.[env].config.js');