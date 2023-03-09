const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devServer:{
        port: 3001,
        static: path.join(__dirname, 'dist'),
        open: true,
        hot: true,
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
    ],
    devtool: "eval-source-map"
}

module.exports = merge(common, devConfig );