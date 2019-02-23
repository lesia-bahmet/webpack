// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constants
const { BUILD, STATIC } = require('../constants');

module.exports = () => {

    return {
        output: {
            path: BUILD,
            filename: 'bundle.js',
        },
        module: {
          rules: [
              { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${STATIC}/template.html`,
                title: 'Учим вебпак!!!',
            }),
        ],
    };
};
