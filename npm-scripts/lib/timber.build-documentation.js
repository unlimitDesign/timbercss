#!/usr/bin/node

'use strict';

/**
 * Called from npm script. (npm run start) for development.
 * Removes docs/ directory then create a blank docs/ diretory/ Then Compiles documentation under docs/. (timber.build-documentation.js)
 */

// currently this script is not intended for use from webpack. Rather executed by npm script (npm run start)

const TimberTools = require('./timber.js');

const $Fs = require('fs');
const $Path = require('path');
const $Glob = require('glob');
const { JSDOM } = require('jsdom'); // uninstall when done
const $Beautify = require('js-beautify');


new TimberTools_documentation();

class TimberTools_documentation extends TimberTools {
    constructor(options = {}) {
        //
    }
}