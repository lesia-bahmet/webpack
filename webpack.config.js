// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean-plugin');
const { resolve } = require('path');

module.exports = () => {
    return {
        mode: 'none',
        devtool: false,
        output: {
            path: resolve(__dirname, './build'),
            filename: 'bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Учим вебпак!!!',
            }),
            new WebpackCleanPlugin({
                on: "emit",
                path: ['./build'],
            }),
        ],
    };
};