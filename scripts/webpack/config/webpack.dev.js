// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import getCommonConfig from './webpack.common';

// Constants
import { SOURCE } from '../constants';

export default () => {

    return merge(getCommonConfig(), {
        mode: 'none',
        devtool: false,
        entry: [SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true'],
        plugins: [
            new HotModuleReplacementPlugin(),
        ],
    });
};
