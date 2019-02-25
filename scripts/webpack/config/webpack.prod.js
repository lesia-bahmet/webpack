// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';

import merge from 'webpack-merge';
import getCommonConfig from './webpack.common';

// Constants
import { PROJECT_ROOT, SOURCE, BUILD } from '../constants';

// Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none',
            devtool: false,
            entry:   [ SOURCE ],
            plugins: [
                new CleanWebpackPlugin([ 'dist', 'build' ], {
                    root:    PROJECT_ROOT,
                    verbose: true,
                }),
            ],
        },
        modules.loadProdCss(),
        modules.optimizeBuild(),
        modules.setupBuildAnalysis(),
    );
};
