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
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
        modules.connectHtml(),
        {
            output: {
                path: BUILD,
                filename: 'js/bundle.js',
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: `${STATIC}/template.html`,
                    title: 'Учим вебпак!!!',
                }),
            ],
        });
};
