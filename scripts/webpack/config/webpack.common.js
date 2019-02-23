// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
import merge from 'webpack-merge';

// Constants
const { BUILD, STATIC } = require('../constants');

// Modules
import * as modules from '../modules';

module.exports = () => {

    return merge(
        modules.loadJavaScript(),
        modules.loadCss(),
        {
            output: {
                path: BUILD,
                filename: 'bundle.js',
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: `${STATIC}/template.html`,
                    title: 'Учим вебпак!!!',
                }),
            ],
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                }
            }
        });
};
