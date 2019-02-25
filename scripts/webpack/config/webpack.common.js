// Core
// const HtmlWebpackPlugin = require('html-webpack-plugin');
import merge from 'webpack-merge';
import { DefinePlugin } from 'webpack';

// Constants
const { BUILD, STATIC } = require('../constants');

// Modules
import * as modules from '../modules';

module.exports = () => {
    const { NODE_ENV } = process.env;

    return merge(
        modules.loadJavaScript(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
        modules.connectHtml(),
        {
            output: {
                path: BUILD,
                filename: 'js/bundle.[hash].js',
                chunkFilename: 'js/bundle.[chunkhash].js',
                publicPath: '/',
            },
            plugins: [
                // new HtmlWebpackPlugin({
                //     template: `${STATIC}/template.html`,
                //     title: 'Учим вебпак!!!',
                // }),
                new DefinePlugin({
                    __ENV__:   JSON.stringify(NODE_ENV),
                    __DEV__:   JSON.stringify(NODE_ENV === 'development'),
                    __STAGE__: JSON.stringify(NODE_ENV === 'stage'),
                    __PROD__:  JSON.stringify(NODE_ENV === 'production'),
                }),
            ],
        });
};
