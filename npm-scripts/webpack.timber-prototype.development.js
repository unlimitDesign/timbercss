'use strict';

/**
 * npm-script "prototype": "webpack-dev-server --mode development --env timber-prototype",
 */

const $TimberTools = require('./lib/timber.build-library.js');

const Tbs = new $TimberTools({
    "outputDir": "public",
    "distDir": "dist/",
});

let moduleExports = {
    context: Tbs.getContext(),
    entry: Tbs.getEntries(),
    output: Tbs.getOutput(),
    devServer: Tbs.getDevServer(),
    watch: Tbs.getWatch(),
    module: {
        rules: [
            Tbs.getModuleRule_babel(),
            Tbs.getModuleRule_scss(),
            Tbs.getModuleRule_fontFiles(),
            Tbs.getModuleRule_images()
        ]
    },
    plugins: [
        Tbs.getPlugin_writeFile(),
        Tbs.getPlugin_miniCssExtract('timberCssFilePath'),
        Tbs.getPlugin_timberToolsUpdateDocPages()
    ]
};

module.exports = moduleExports;