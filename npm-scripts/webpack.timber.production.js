'use strict';

const $TimberTools = require('./lib/timber.webpack-config.js');

const Tbs = new $TimberTools();

let moduleExports = {
    context: Tbs.getContext(),
    entry: Tbs.getEntries(),
    output: Tbs.getOutput(),
    devtool: 'source-map',
    module: {
        rules: [
            Tbs.getModuleRule_babel(),
            Tbs.getModuleRule_scss(),
            Tbs.getModuleRule_fontFiles(),
        ]
    },
    optimization: Tbs.getOptimization(),
    plugins: [
        Tbs.getPlugin_writeFile(),
        Tbs.getPlugin_miniCssExtract('timberCssFilePath'),
        Tbs.getPlugin_miniCssExtract('timberCssFileMinPath'),
        Tbs.getPlugin_purgecssPlugin(),
        Tbs.getPlugin_banner()
    ],
};

module.exports = moduleExports;