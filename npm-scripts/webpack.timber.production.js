'use strict';

/**
 * This config is for production mode.
 * In package script,
 * "start": "rm -rf dist;node ./npm-scripts/lib/timber.build-documentation.js --mode production;webpack --mode production --env timber;cp -rf docs/css dist/css; rm dist/css/skn.css; cp -rf docs/js dist/js; cp -rf docs/icons dist/icons;",
 * 1. Removes dist directory as well as docs directory.
 * 2. Compiles the docs from the source under src/docs/
 * 3. Compiles js, css and icons into the docs.
 * 4. Copies the compiled js, css and icons under dist directory. (timber.copy-to-dist.js)
 */

const $TimberTools = require('./lib/timber.build-library.js');

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