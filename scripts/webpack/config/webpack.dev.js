// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import getCommonConfig from './webpack.common';

// Constants
import { SOURCE } from '../constants';

// Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'development',
            devtool: 'cheap-module-eval-source-map',
            entry:   [
                SOURCE,
                'webpack-hot-middleware/client?reload=true&quiet=true',
            ],
            plugins: [ new HotModuleReplacementPlugin() ],
        },
        modules.loadDevCss(),
    );
};
