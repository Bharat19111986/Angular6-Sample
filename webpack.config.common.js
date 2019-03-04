var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
let pathsToClean = [
    'dist',
    'build'
]

// the clean options to use
let cleanOptions = {
    root:     '/full/webpack/root/path',
    exclude:  ['shared.js'],
    verbose:  true,
    dry:      false
}
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
                test: /\.less$/,
                use: [{
                    loader: 'raw-loader'
                }, {
                    loader: 'less-loader', options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
            {
                test: /\.css$/,
                loaders:['raw-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                    loader: 'file-loader'
                }]
            }
        ],

        exprContextCritical: false
    },

    plugins: [
        new CleanWebpackPlugin(
            pathsToClean, cleanOptions
        ),
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}

