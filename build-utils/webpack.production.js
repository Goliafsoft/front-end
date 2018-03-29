const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const config = {
  devtool: 'source-map',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new SWPrecacheWebpackPlugin({
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/, /\.html$/],
    }),
  ],
};

module.exports = config;
