'use strict';

/**
 * This config is for development mode.
 * 1. Removes docs/ directory then create a blank docs/ diretory/ Then Compiles documentation under docs/. (timber.build-documentation.js)
 * 2. Webpack compiles in memory, and publish the documentaion under docs/. The javascript is hosted within the memory.
 * 3. Watch is left running. It re-compiles js / scss in memory when js / scss or any contents hosted under docs/ is updated.
 * 4. Chokidar is launched at the same time to monitor any changes under the src/doc directory. If any of those documentation files are updated, it compiles only the ones necessary.
 */

const $TimberTools = require('./lib/timber.build-library.js');

const Tbs = new $TimberTools();

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
        Tbs.getPlugin_miniCssExtract('timberCssFilePath')
    ]
};

module.exports = moduleExports;