const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = mode => ({
  output: {
    filename: '[chunkhash].[name].bundle.js',
  },
  optimization: {
    runtimeChunk: true,
  },
  resolve: {
    modules: [SRC_PATH, 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true },
      }],
    }, {
      loader: 'file-loader',
      exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(mode !== 'development'),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebPackPlugin({
      favicon: './src/favicon.ico',
      template: './src/index.html',
      fileName: './index.html',
      title: 'Admin Panel',
      inject: 'body',
    }),
  ],
});
