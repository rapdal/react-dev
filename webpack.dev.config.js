const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    loaders: [
      { 
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        },
        exclude: path.join(__dirname, 'node_modules') 
      },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}