'use strict';

const $TimberTools = require('./lib/timber.webpack-config.js');

const TimberTools = new $TimberTools();

let moduleExports = {
    context: TimberTools.getContext(),
    entry: TimberTools.getEntries(),
    output: TimberTools.getOutput(),
    devtool: 'source-map',
    module: {
        rules: [
            TimberTools.getModuleRule_babel(),
            TimberTools.getModuleRule_scss(),
            TimberTools.getModuleRule_fontFiles(),
        ]
    },
    optimization: TimberTools.getOptimization(),
    plugins: [
        TimberTools.getPlugin_writeFile(),
        TimberTools.getPlugin_miniCssExtract('timberCssFilePath'),
        TimberTools.getPlugin_miniCssExtract('timberCssFileMinPath'),
        TimberTools.getPlugin_purgecssPlugin(),
        TimberTools.getPlugin_banner()
    ],
};

module.exports = moduleExports;