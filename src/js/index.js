/**
 * For NPM module
 */

// Core
import timberCore from './_tm.core.js';

// Core instance
module.exports = initTimberCore;

function initTimberCore(options = { initialize: false }) {
    if (!(this instanceof initTimberCore)) {
        return new timberCore(options)
    } else {
        return false;
    }
}