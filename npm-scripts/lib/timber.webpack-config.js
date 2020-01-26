'use strict';

const TimberTools = require('./timber.js');

const $Glob = require('glob');
const $Webpack = require('webpack');

// Webpack plugins
const $TerserJSPlugin = require('terser-webpack-plugin');
const $MiniCssExtractPlugin = require('mini-css-extract-plugin');
const $PurgecssPlugin = require('purgecss-webpack-plugin');
const $OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const $CopyWebpackPlugin = require('copy-webpack-plugin');
const $WriteFilePlugin = require('write-file-webpack-plugin');
const Webpack = require('webpack');

/**
* Timber CSS Tools Class for maintaining the library
*/
module.exports = class TimberTools_library extends TimberTools {

    // Webpack Settings
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

        // Output minified version development env is false
        const _outputJsFileName = (this.webpackMode !== 'development') ? this.options.timberJsMinFileName : this.options.timberJsFileName;
        return {
            path: this.getAbsolutePath(this.options.outputDir),
            filename: `./js/${_outputJsFileName}`,
        }
    }

    /**
    * Set up development server
    * @param   {string}  contentBase  The server root path
    * @return  {object}               devServer settings
    */
    getDevServer() {
        const _devServerConfig = {
            port: this.options.serverPort,
            host: this.options.serverHost,
            disableHostCheck: this.options.disableHostCheck,
            contentBase: this.getAbsolutePath(this.options.contentBase),
            publicPath: this.options.serverPublicPath,
            watchContentBase: this.options.watchContentBase,
            inline: this.options.enableHotModuleReplacement === true ? true : false,
            hot: this.options.enableHotModuleReplacement === true ? true : false,
            // compress: true,
            stats: {
                children: false, // Hide children information
                maxModules: 0 // Set the maximum number of modules to be shown
            },
        };
        if (this.options.devServerCallback && this.options.devServerCallback.callback) {
            this.options.devServerCallback.callback(_devServerConfig);
        }
        return _devServerConfig;
    }

    getWatch() {
        // Watch needs to be explicityly defined.
        // this.options.watchEnabled supercedes otherwise watch is enabled when the webpack mode is 'development'
        return (this.options.watchEnabled === false) ? false : (this.options.watchEnabled === true) ? true : (this.webpackMode === 'development') ? true : false;
    }

    /**
    * Get all the optimization options.-keyboard
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
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
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

                        // The webp option will enable WEBP
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

    getPlugin_HotModuleReplacement() {
        // Skip if enableHotModuleReplacement is not set to true (boolean)
        if (this.options.watchEnabled == true && this.options.enableHotModuleReplacement !== true) {
            return function () { };
        }
        return new Webpack.HotModuleReplacementPlugin();
    }

    getPlugin_miniCssExtract(settingsName) {
        // Use settingsName is the settings name does not exist in the options.
        const _fileName = (settingsName in this.options) ? this.options[settingsName] : settingsName;
        return new $MiniCssExtractPlugin({
            filename: `css/${_fileName}`
        });
    }

    getPlugin_purgecssPlugin() {
        // Skip if enablePurgeCSS is not set to true (boolean)
        if (this.options.enablePurgeCSS !== true) {
            return function () { };
        }
        // Scan through the contentBase directory
        const _paths = $Glob.sync(`${this.getAbsolutePath(this.options.contentBase)}/**/*.html`, { nodir: true });
        if (!_paths.length > 0) {
            console.log(`Error: there is not any html for purgeCSS to refer. Given path to the html directory was: ${this.getAbsolutePath(this.options.contentBase)}/**/*.html`);
            process.exit(0);
        }

        // Return at once
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

    // Used for copying the icons folder in updateTimberLibs
    getPlugin_copyWebpack(originalLocation = '', targetLocation = 'dist/icons', sourceDirectory = 'src/icons') {
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
    getPlugin_writeFile() {
        return new $WriteFilePlugin({
            // exclude hot-update files
            test: /^(?!.*(hot)).*/
        });
    }
}