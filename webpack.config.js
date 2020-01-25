'use strict';

/**
* This webpack.config.js file is designed to switch among different webpack configurations.
* By default there are two configurations provided that can be run through npm script of the package.json.
* "npm run start" executes "webpack-dev-server --mode development" and imports "npm-scripts/webpack.timber.development.js"
* "npm run build" executes "webpack --mode production" and imports "npm-scripts/webpack.timber.production.js"
*/

const $Fs = require('fs');

module.exports = (env) => {
    // Get mode
    const mode = (process.argv[process.argv.indexOf('--mode') + 1]) ? process.argv[process.argv.indexOf('--mode') + 1] : 'development';

    // Get environment
    if (!env) {
        env = 'timber';
    }
    if ($Fs.existsSync(`./npm-scripts/webpack.${env}.${mode}.js`)) {
        return require(`./npm-scripts/webpack.${env}.${mode}.js`);
    } else {
        console.log(`Error: requested webpack config file "./npm-scripts/webpack.${env}.${mode}.js" dose not exist`);
        process.exit(1);
    }
}