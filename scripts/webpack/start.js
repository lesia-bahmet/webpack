import webpack from 'webpack';
import getConfig from './config/webpack.dev';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

import {HOST, PORT} from './constants';

const compiler = webpack(getConfig());

(async () => {
    const port = await choosePort(HOST, PORT);

    const server = new DevServer(compiler, {
        host: HOST,
        port,
        historyApiFallback: true,
        overlay: true,
        quiet: true,
        clientLogLevel: 'none',
        noInfo: true,
        after: (app) => {
            app.use(
                hot(compiler, {
                    log: false,
                }),
            );
        }
    });

    server.listen(port, HOST, () => {
        const url = `http://${HOST}:${port}`;
        console.log(
            `${chalk.greenBright('Server listening on')} ${chalk.blueBright(`http://${HOST}:${port}`)}`
        );

        openBrowser(url);
    }).catch(err => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });
})();
