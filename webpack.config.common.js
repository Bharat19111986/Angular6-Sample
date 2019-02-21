var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
module.exports={
    entry: './main.ts',
    resolve:{
        extensions: ['.js','.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders:['html-loader']
            },
            {
                test: /\.css$/,
                loaders:['raw-loader']
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}

