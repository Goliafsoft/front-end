/* eslint-disable import/no-dynamic-require, global-require */

const webpackMerge = require('webpack-merge');

const commonConfig = require('./build-utils/webpack.common');

module.exports = function config(env, { mode }) {
  const envConfig = require(`./build-utils/webpack.${mode}.js`);
  return webpackMerge(commonConfig(mode), envConfig);
};
