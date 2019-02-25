module.exports = (api) => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || production
    api.cache.never(); //

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties', // plugins: ['@babel/proposal-class-properties'], - same
    ];

    if(env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/react',
            [
                '@babel/preset-env', // presets: ['@babel/env'], - same
                {
                    debug: true,
                    loose: false, // более быстрый код, меньше надежности
                    spec: true, // менее быстрый код, больше надежности
                    modules: false, // false || auto???? = esm, cjs, amd, umd
                }
            ],

        ],
        plugins,
    }
};