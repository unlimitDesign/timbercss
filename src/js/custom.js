// Core
import timberCore from './_tm.core.js';

// Core instance
let timber = new timberCore({
  initialize: false
});

// Initialize all imported modules
// Or intialize a select number of modules as follows:
// timber.module.modulename.initialize();
// For callbacks: timber.module.modulename.settings.callback = function(){};
// console.log(timber.module.modulename.settings) for module settings
if (typeof timber.initialize != 'undefined') {
  timber.initialize();
}