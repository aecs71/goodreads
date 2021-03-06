/* import webpack from 'webpack';
import path from 'path'; */
const webpack=require('webpack');
const path=require('path');
const GLOBALS={
  'process.env.NODE_ENV':JSON.stringify('production')
}
const ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: './src/index'
  ,
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.DefinePlugin(GLOBALS),
   new ExtractTextPlugin('styles.css'),
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.UglifyJsPlugin()

  ],
  module: {
   
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      {test:/\.(png|svg|jpg|gif)$/,loaders:['file-loader']}
    ]
  }
};
