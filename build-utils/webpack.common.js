const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = mode => ({
  output: {
    filename: '[chunkhash].bundle.js',
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
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true },
        },
      ],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(mode !== 'development'),
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      fileName: './index.html',
      title: 'Admin Panel',
      inject: 'body',
    }),
  ],
});
