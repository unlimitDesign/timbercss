const $Fs = require('fs');
const $Path = require('path');
const $Glob = require('glob');
const { JSDOM } = require('jsdom'); // uninstall when done
const $Beautify = require('js-beautify');

const $TimberTools = require('./lib/timber.build-library.js');

const Tbs = new $TimberTools({ debug: true });