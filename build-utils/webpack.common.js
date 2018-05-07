const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = mode => ({
  output: {
    filename: '[chunkhash].bundle.js',
  },
  optimization: {
    runtimeChunk: true,
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
    new HtmlWebPackPlugin({
      favicon: './src/favicon.ico',
      template: './src/index.html',
      fileName: './index.html',
      title: 'Admin Panel',
      inject: 'body',
    }),
  ],
});
