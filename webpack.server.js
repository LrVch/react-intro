const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const webpack = require('webpack');

const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  node: {
    __filename: true,
    __dirname: true
  },

  output: {
    path: path.join(__dirname, '/server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: sassModuleRegex,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                getLocalIdent: getCSSModuleLocalIdent,
              },
              onlyLocals: true,
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[contenthash:8].[ext]',
            useRelativePath: true,
            publicPath: '/static/media'
          }
        }],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_SERVER_RENDER': true,
    })
  ]
};