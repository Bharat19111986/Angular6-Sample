var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');
var valPath = path.resolve(__dirname,'dist');
console.log('File Path present',valPath);
module.exports = webpackMerge(commonConfig,{
    devtool: 'inline-source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath: '/',
        filename:'bundle.js',
        chunkFilename:'[id].chunk.js'
    },
    mode:'development',
    module:{
      rules:[
          {
              test:/\.ts$/,
              use:[
                  {loader:'awesome-typescript-loader',options:{
                      transpileOnly:true
                      }},
                  {loader:'angular2-template-loader'},
                  {loader:'angular-router-loader'}
              ]
          }
      ]
    },
    devServer:{
        historyApiFallback:true,
        stats:'minimal'
    }
})
