/* globals __dirname module require */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        alias: {
            jquery: './src/javascripts/jquery',
            $: './src/javascripts/jquery'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: { minimize: true }
            }]
        }, {
            test: /\.jpg$/,
            use: [{ loader: 'url-loader' }]
        }, {
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
        }, {
            test: /\.(png|gif|ico|webmanifest)$/,
            use: [ 'file-loader' ]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/html/index.html',
            filename: './index.html',
            favicon: './src/assets/favicon.ico',
            excludeChunks: [ 'server' ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
