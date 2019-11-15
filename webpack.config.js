'use strict';

const $Fs = require('fs');

module.exports = (env) => {
    if (!env) {
        env = 'updateTimberLibs';
    }
    if ($Fs.existsSync(`./npm-scripts/webpack.${env}.js`)) {
        return require(`./npm-scripts/webpack.${env}.js`);
    } else {
        console.log(`Error: requested mode, ${env}, does not exist.`);
        process.exit(1);
    }
}