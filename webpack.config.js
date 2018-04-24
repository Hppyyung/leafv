var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
   devtool: false,
   entry: {
      bundle: './src/index.js'
   },
   output: {
      path: __dirname + "/dist",
      filename: '[name].js',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader', use: [{
                  loader: 'css-loader', options: {
                     minimize: true
                  }
               }]
            })
         },
         {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader!less-loader'
            })
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader!sass-loader'
            })
         },

         {
            test: /\.js$/,
            use: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin({filename: '[name].css'}),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
         title: "leafv"
      })
   ],
   resolve: {
      modules: [
         "node_modules",
         path.resolve(__dirname, "./")
      ]
   },
   // optimization: {
   //    splitChunks: {
   //       cacheGroups: {
   //          commons: {
   //             chunks: "initial",
   //             test: /react|lodash|react-dom|redux|react-redux|markdown-it|core-decorators/,
   //             name: "vendor", 
   //          }
   //       }
   //    }
   // }
}