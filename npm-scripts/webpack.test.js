const $Fs = require('fs');
const $Path = require('path');
const $Glob = require('glob');
const { JSDOM } = require('jsdom'); // uninstall when done
const $Beautify = require('js-beautify');

/**
 * Plan
 * 1. Delete docs folder
 * 2. Copy folders (public/images, public/css)
 * 3. Compile src/docs/pages into docs/
 * End
 */

