const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "lux": "./src/lux.js"
    },
    //devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        library: 'lux',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: false
    },
    plugins: []
};