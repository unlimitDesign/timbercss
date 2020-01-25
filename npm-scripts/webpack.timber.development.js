'use strict';

const $TimberTools = require('./lib/timber.webpack-config.js');
const TimberTools = new $TimberTools();

let moduleExports = {
    context: TimberTools.getContext(),
    entry: TimberTools.getEntries(),
    output: TimberTools.getOutput(),
    devServer: TimberTools.getDevServer(),
    watch: TimberTools.getWatch(),
    module: {
        rules: [
            TimberTools.getModuleRule_babel(),
            TimberTools.getModuleRule_scss(),
            TimberTools.getModuleRule_fontFiles(),
            TimberTools.getModuleRule_images()
        ]
    },
    plugins: [
        TimberTools.getPlugin_writeFile(),
        TimberTools.getPlugin_miniCssExtract('timberCssFilePath')
    ]
};

module.exports = moduleExports;