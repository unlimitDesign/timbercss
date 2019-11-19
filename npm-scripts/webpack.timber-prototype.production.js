'use strict';

/**
 * npm-script 'prototype': 'webpack-dev-server --mode development --env timber-prototype',
 */

const $TimberTools = require('./lib/timber.build-library.js');

const Tbs = new $TimberTools({
    outputDir: 'public',
    watchContentsSourceDirectory: false,
});

let moduleExports = {
    context: Tbs.getContext(),
    entry: Tbs.getEntries(),
    output: Tbs.getOutput(),
    devServer: Tbs.getDevServer(),
    watch: Tbs.getWatch(),
    devtool: 'source-map',
    module: {
        rules: [
            Tbs.getModuleRule_babel(),
            Tbs.getModuleRule_scss(),
            Tbs.getModuleRule_fontFiles(),
            Tbs.getModuleRule_images()
        ]
    },
    optimization: Tbs.getOptimization(),
    plugins: [
        Tbs.getPlugin_writeFile(),
        Tbs.getPlugin_miniCssExtract('timberCssFilePath'),
        Tbs.getPlugin_miniCssExtract('timberCssFileMinPath'),
        Tbs.getPlugin_purgecssPlugin(),
        Tbs.getPlugin_banner()
    ]
};

module.exports = moduleExports;