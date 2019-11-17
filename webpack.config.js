'use strict';

const $Fs = require('fs');

module.exports = (env) => {
    // get mode
    const mode = (process.argv[process.argv.indexOf('--mode') + 1]) ? process.argv[process.argv.indexOf('--mode') + 1] : 'development';
    // get env
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