// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

// Constants
const { PROJECT_ROOT, SOURCE, BUILD, STATIC } = require('../constants');

module.exports = () => {

    return {
        mode: 'none',
        devtool: false,
        entry: [SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true'],
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
            new CleanWebpackPlugin(
                BUILD,
                {
                    root: PROJECT_ROOT,
                    verbose: true,
                },
            ),
            new HotModuleReplacementPlugin(),
        ],
    };
};