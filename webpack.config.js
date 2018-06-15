const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "lux": "./src/lux.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        library: 'lux',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    optimization: {
        minimize: false
    },
    devtool: "source-map",
    plugins: [],
    mode: 'development'
};