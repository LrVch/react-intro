const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

// console.log(process.env)

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
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: '[name]__[local]--[hash:base64:5]'
            },
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
            },
          }
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: ['css-loader'],
      // },
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
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   'process.env.REACT_APP_SERVER_RENDER': JSON.stringify(process.env.REACT_APP_SERVER_RENDER)
    // }),
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //   REACT_APP_SERVER_RENDER: JSON.stringify(process.env.REACT_APP_SERVER_RENDER)
    // })
  ],
};