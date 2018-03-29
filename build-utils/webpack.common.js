const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPath = require('./commonPath');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPath.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      fileName: 'index.html',
      title: 'Admin Panel',
      inject: 'body',
    }),
  ],
};
