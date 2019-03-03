// const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');

const res = p => path.resolve(__dirname, p);

// const nodeModules = res('./node_modules');
const entry = res('../renderer.js');
const output = res('../buildServer');

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  devtool: 'eval',
  devServer: {
    hot: true,
    inline: true
  },
  externals: [
    'canvas',
    'ws'
  ],
  entry: [
    entry
  ],
  output: {
    path: output,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: 'buildClient/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-to-string-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.mjs', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        IS_BROWSER: false
      }
    })
  ]
};