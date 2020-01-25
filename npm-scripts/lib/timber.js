'use strict';

const $Fs = require('fs');
const $Path = require('path');

/**
* Timber CSS Maintanance Tools Class
* Use `.timber.env.json` config file for your local environment. Refer to README for more information.
*/
module.exports = class TimberTools {

    /**
    * Defines all the vairables and constants used in this class
    * You can override the default settings by passing a paramter or by ".timber.env.json" config file in the project root.
    * @param   Object options  options values to override default settings.
    */
    constructor(options = {}) {

        // Get the root directory without a trailing slash.
        this.absoluteRootDir = $Path.join(__dirname, '../..');

        // Get the current mode. Choices: "development", "production", "none"
        this.webpackMode = (process.argv[process.argv.indexOf('--mode') + 1]) ? process.argv[process.argv.indexOf('--mode') + 1] : 'development';
        // Load env file and merge with options sent as parameter. Settings in the env file is overwirtten by those from the paramter.
        if ($Fs.existsSync(this.getAbsolutePath('.timber.env.json'))) {
            const _configFileOptions = require(this.getAbsolutePath('.timber.env.json'));
            if ('version' in _configFileOptions) {
                delete (_configFileOptions.version);
                console.log('Info: "version" in .timbercss.json is ignored.');
            }
            options = Object.assign(_configFileOptions, options);
        }

        // Default option values
        const _default_options = require("./timber.env.default");

        // Mrge with default options
        this.options = Object.assign(_default_options, options);

        // Convert purgeCSS_whitelistPatterns type RegExp
        this.options.purgeCSS_whitelistPatterns = this.preparePurgeCssWhiteListPatterns(this.options.purgeCSS_whitelistPatterns);
    }

    /**
    * Get option settings by settings name.
    * @param   {string}  settingsName   The settings name
    * @return  {mixed}                  Settings value or null in case settings by the settings name is not found.
    */
    getSettings(settingsName) {
        if (settingsName in this.options) {
            return this.options[settingsName];
        } else {
            return null;
        }
    }

    /**
    * Convert string value to RegExpt
    * @param   {string}  regexpString  Regexp in string
    * @return  {RegExp}                Object in RegExp type
    */
    preparePurgeCssWhiteListPatterns(regexpArray = []) {
        if (Array.isArray(regexpArray)) {
            for (const _index in regexpArray) {
                if (typeof regexpArray[_index] === 'string') {
                    regexpArray[_index] = this.convertToRegExp(regexpArray[_index]);
                }
            }
            return regexpArray;
        } else if (regexpArray instanceof RegExp) {
            return [regexpArray];
        } else if (typeof regexpArray === 'string') {
            return [this.convertToRegExp(regexpArray)];
        } else {
            return [];
        }
    }

    convertToRegExp(regexpString) {
        try {
            return new RegExp(regexpArray.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        } catch (_error) {
            return new RegExp();
        }
    }

    /**
    * Utility class method to return relative path
    * @param   {string}  relativePath  Relative path
    * @return  {string}                A full absolute path
    */
    getAbsolutePath(relativePath = '') {
        return $Path.resolve(this.absoluteRootDir, relativePath);
    }

    /**
    * Webpack Settings
    */
    getContext() {
        return this.absoluteRootDir;
    }
}