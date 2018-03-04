var webpack = require('webpack');
var _ = require('lodash');

var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var npmModules = require('./package.json').dependencies;
var vendorLibs = [];
if(npmModules) {
    _.each(npmModules,function (item,key) {
        vendorLibs.push(key);
    });
}

module.exports = {
    entry: {
        app: "./source/init.js",
        vendor: vendorLibs,
    },
    output: {
        path: __dirname,
        filename: "src/[name].js"
    },
    module: {
        rules: [
            // {test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader'}
        ]
    },
    plugins: [
        // new UglifyJsPlugin({
        //     test: /\.js($|\?)/i,
        //     exclude: "/node_modules/",
        //     cache: true
        // })
    ]
};