// Core
const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');

const compiler = webpack(getConfig());
compiler.run((errors, stats)=>{

    // ошибка конфигурации вебпака
    if(errors) {
        console.error(errors.stack || errors);

        if(errors.details){
            console.log(errors.details);
        }

        return;
    }

    const info = stats.toString({
        hash: true,
        colors: true,
        modules: false,
        children: false,
    });

    console.log(info);
    console.log(chalk.greenBright('Build completed!'));

    if(stats.hasErrors()){
        // ошибка внутри приложения (во время компиляции)
        console.log(chalk.redBright('Error!'));
        console.error(info)
    }

    if(stats.hasWarnings()){
        console.log(chalk.yellowBright('Error!'));
        console.warn(info)
    }
});
