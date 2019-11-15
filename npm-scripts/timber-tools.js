'use strict';

const $Fs = require('fs');
const Package = require('../package.json');
const $Path = require('path');
const $Glob = require('glob');
const $Webpack = require('webpack');

// webpack plugins
const $TerserJSPlugin = require('terser-webpack-plugin');
const $MiniCssExtractPlugin = require('mini-css-extract-plugin');
const $PurgecssPlugin = require('purgecss-webpack-plugin');
const $OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const $CopyWebpackPlugin = require('copy-webpack-plugin');
const $WriteFilePlugin = require('write-file-webpack-plugin');


/**
 * Timber CSS Maintanance Tools Class
 *
 * Use `.timbercss.json` config file for your local environment. Copy .timbercss.sample.json as `.timbercss.json` and modify to suit to your needs.
 */
module.exports = class TimberTools {
    /**
     * Defines all the vairables and constants used in this class
     *
     * You can override the default settings by passing a paramter or by .timbercss.json config file
     *
     * @param   Object options  options values to override default settings.
     */
    constructor(options = {}) {
        // Get the root directory without a trailing slash.
        this.absoluteRootDir = $Path.join(__dirname, '..');
        // Get the current mode. Choices: "development", "production", "none"
        this.webpackMode = (process.argv[process.argv.indexOf('--mode') + 1]) ? process.argv[process.argv.indexOf('--mode') + 1] : 'development';
        // load env file and merge with options sent as parameter. Settings in the env file is overwirtten by those from the paramter.
        if ($Fs.existsSync('.timbercss.json')) {
            const _configFileOptions = require('../.timbercss.json');
            if ('version' in _configFileOptions) {
                delete (_configFileOptions.version);
                console.log('Info: "version" in .timbercss.json is ignored.');
            }
            options = Object.assign(_configFileOptions, options);
        }

        // default option values
        const _default_options = {
            // choose among documentation, production and development.
            env: (options.env) ? options.env : 'updateTimberLibs',
            version: Package.version,
            copyright: 'Copyright © unlimit.design 2019',
            authorCredits: 'unlimit.design, Christian Lundgren, Shu Miyao',
            // server configs
            serverPort: '3000',
            watchEnabled: true,
            contentBase: 'docs',
            // source
            htmlDir: './docs',
            // output directories.
            outputDir: 'dist',
            // timber lib source file paths
            timberJsSrcFilePath: './src/js/custom.js',
            timberCssSrcFilePath: './src/scss/timber.scss',
            // timber lib produt file paths
            timberJsFileName: 'tm.core.js',
            timberJsMinFileName: 'tm.core.min.js',
            timberCssFilePath: 'css/timber.css',
            timberCssFileMinPath: 'css/timber.min.css',
            // Image output options
            jpgProgressive: true,
            jpgQuality: '65',
            pngQuality: '5-90',
            pngSpeed: '4',
            gifInterlaced: false,
            webpQuality: '75',
            purgeCSS_whitelist: ['active', 'disabled', 'no-transition', 'freeze', 'header-compact', 'header-background', 'header-positioned', 'header-in', 'header-out', 'element-reveal-right', 'element-reveal-left', 'slide-in-reset', 'scale-in-reset', 'inactive', 'video-container', 'bg-video-container', 'loaded', 'in-view', 'out-of-view', 'bg-image', 'fixed-dimension', 'tm-lightbox', 'tml-content-wrapper', 'tml-content-wrapper.zoomed', 'tml-inner', 'tml-thumbnail-wrapper', 'tml-thumb-active', 'play', 'tml-content', 'tml-content.error', 'tml-caption', 'tml-nav', 'tml-nav.active', 'tml-nav.tml-next', 'tml-nav.tml-prev', 'tml-zoom', 'tml-thumbnails', 'tml-exit', 'tml-toolbar', 'video', 'iframe', 'object', 'embed'],
            purgeCSS_whitelistPatterns: [/\bw-\b/]
        }

        // merge with default options
        this.options = Object.assign(_default_options, options);
        // convert purgeCSS_whitelistPatterns type RegExp
        this.options.purgeCSS_whitelistPatterns = this.preparePurgeCssWhiteListPatterns(this.options.purgeCSS_whitelistPatterns);
        // console.log(JSON.stringify(this.options));
        // console.log(this.absoluteRootDir);
        // console.log(this.getEntries());
        // console.log(this.getOutput());
        // console.log(this.options.purgeCSS_whitelistPatterns);
    }

    /**
     * Get option settings by settings name.
     *
     * @param   {string}  settingsName      The settings name
     *
     * @return  {mixed}                Settings value or null in case settings by the settings name is not found.
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
     *
     * @param   {string}  regexpString  Regexp in string
     *
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
     *
     * @param   {string}  relativePath  relative path
     *
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

    getEntries() {
        return [
            this.getAbsolutePath(this.options.timberJsSrcFilePath),
            this.getAbsolutePath(this.options.timberCssSrcFilePath)
        ];
    }

    getOutput() {
        // make minified version if it is not development env.
        const _outputJsFileName = (this.webpackMode !== 'development') ? this.options.timberJsMinFileName : this.options.timberJsFileName;
        return {
            path: this.getAbsolutePath(this.options.outputDir) + '/',
            filename: `js/${_outputJsFileName}`,
        }
    }

    /**
     * Set up development server
     *
     * @param   {string}  contentBase  The server root path
     *
     * @return  {object}               devServer settings
     */
    getDevServer(contentBase = 'docs') {
        return {
            port: this.options.serverPort,
            host: "0.0.0.0",
            contentBase: (contentBase) ? contentBase : this.options.contentBase,
            watchContentBase: this.options.watchEnabled,
            disableHostCheck: true
        };
    }

    getWatch() {
        return (this.options.watchEnabled === true) ? true : false;
    }

    /**
     * Get all the optimization options.-keyboard
     *
     * @return  {object}  Object with array inside. Only minimizer configuration is included for now.
     */
    getOptimization() {
        return {
            minimize: true,
            minimizer: [
                this.getOptimization_minimizer_teaserJs(),
                this.getOptimization_minimizer_optimizeCssAssets()
            ]
        };
    }

    /**
     * Optimization / Minimiers options
     */
    getOptimization_minimizer_teaserJs() {
        return new $TerserJSPlugin({
            parallel: true,
        });
    }

    getOptimization_minimizer_optimizeCssAssets() {
        return new $OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/g,
        });
    }

    /**
     * Module Rules
     */
    getModuleRule_babel() {
        return {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        };
    }

    getModuleRule_scss() {
        return {
            test: /\.(sa|sc|c)ss$/,
            use: [
                $MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        minimize: false,
                        outputStyle: 'expanded'
                    }
                }
            ]
        };
    }

    getModuleRule_fontFiles() {
        return {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icons',
                    publicPath: '../icons'
                }
            }]
        };
    }

    getModuleRule_images() {
        return {
            test: /\.(gif|png|jpe?g|svg)$/i,
            include: /images/,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: this.options.jpgProgressive,
                            quality: this.options.jpgQuality
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: this.options.pngQuality,
                            speed: this.options.pngSpeed
                        },
                        gifsicle: {
                            interlaced: this.options.gifInterlaced,
                        },
                        // the webp option will enable WEBP
                        webp: {
                            quality: this.options.webpQuality
                        }
                    }
                },
            ],
        };
    }

    /**
     * Plugins
     */
    getPlugin_miniCssExtract(settingsName) {
        // use settingsName is the settings name does not exist in the options.
        const _fileName = (settingsName in this.options) ? this.options[settingsName] : settingsName;
        return new $MiniCssExtractPlugin({
            filename: `${_fileName}`
        });
    }

    getPlugin_purgecssPlugin() {
        // find html files in the directories as set in this.options.htmlDir
        const _paths = $Glob.sync(`${this.getAbsolutePath(this.options.htmlDir)}/**/*.html`, { nodir: true });
        if (!_paths.length > 0) {
            console.log(`Error: there is not any html for purgeCSS to refer. Given path to the html directory was: ${this.getAbsolutePath(this.options.htmlDir)}/**/*.html`);
            process.exit(0);
        }
        // return at once
        return new $PurgecssPlugin({
            paths: _paths,
            whitelist: this.options.purgeCSS_whitelist,
            whitelistPatterns: this.options.purgeCSS_whitelistPatterns
        });
    }

    getPlugin_banner() {
        return new $Webpack.BannerPlugin({
            banner: `${this.options.copyright}\nVersion: ${this.options.version}\nHash:[hash]\nChunkhash:[chunkhash]\nFilebase:[filebase]\nAuthor: ${this.options.authorCredits}\nTimestamp: ${new Date(Date.now())}\n`
        });
    }

    // used for copying the icons folder in updateTimberLibs
    getPlugin_copyWebpackPlugin(originalLocation = '', targetLocation = 'dist/icons', sourceDirectory = 'src/icons') {
        return new $CopyWebpackPlugin(
            [
                {
                    from: originalLocation,
                    to: targetLocation,
                },
            ],
            { context: sourceDirectory }
        );
    }
    getPlugin_writeFilePlugin() { return new $WriteFilePlugin(); }
}