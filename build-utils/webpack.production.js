const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  devtool: 'source-map',
  module: {
    rules: [],
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/, /\.html$/],
      minify: true,
    }),
    new CompressionPlugin({
      test: /\.js/,
    }),
  ],
};

module.exports = config;
