'use strict';

/**
 * This config is for development mode.
 * 1. Removes docs/ directory then create a blank docs/ diretory/ Then Compiles documentation under docs/. (timber.build-documentation.js)
 * 2. Webpack compiles in memory, and publish the documentaion under docs/. The javascript is hosted within the memory.
 * 3. Watch is left running. It re-compiles js / scss in memory when js / scss or any contents hosted under docs/ is updated.
 * 4. Chokidar is launched at the same time to monitor any changes under the src/doc directory. If any of those documentation files are updated, it compiles only the ones necessary.
 */

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