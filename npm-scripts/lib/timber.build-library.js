'use strict';

const TimberTools = require('./timber.js');

const $Glob = require('glob');
const $Webpack = require('webpack');

// webpack plugins
const $TerserJSPlugin = require('terser-webpack-plugin');
const $MiniCssExtractPlugin = require('mini-css-extract-plugin');
const $PurgecssPlugin = require('purgecss-webpack-plugin');
const $OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const $CopyWebpackPlugin = require('copy-webpack-plugin');
const $WriteFilePlugin = require('write-file-webpack-plugin');
const $TimberToolsUpdateDocPages = require('./TimberToolsUpdateDocPages.js');


/**
 * Timber CSS Tools Class for maintaining the library
 */
module.exports = class TimberTools_library extends TimberTools {
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
        // const _outputJsFileName = (this.webpackMode !== 'development') ? this.options.timberJsMinFileName : this.options.timberJsFileName;
        const _outputJsFileName = this.options.timberJsMinFileName;
        return {
            path: this.getAbsolutePath(this.options.outputDir),
            filename: `./js/${_outputJsFileName}`,
        }
    }

    /**
     * Set up development server
     *
     * @param   {string}  contentBase  The server root path
     *
     * @return  {object}               devServer settings
     */
    getDevServer() {
        return {
            port: this.options.serverPort,
            host: this.options.serverHost,
            disableHostCheck: true,
            contentBase: this.options.contentBase,
            publicPath: this.options.serverPublicPath,
            watchContentBase: this.options.watchContentBaseEnabled,
            // inline: true,
            // compress: true,
            stats: {
                children: false, // Hide children information
                maxModules: 0 // Set the maximum number of modules to be shown
            },
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
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
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
        // Scan through the documentation directory
        const _paths = $Glob.sync(`${this.getAbsolutePath(this.options.contentBase)}/**/*.html`, { nodir: true });
        if (!_paths.length > 0) {
            console.log(`Error: there is not any html for purgeCSS to refer. Given path to the html directory was: ${this.getAbsolutePath(this.options.contentBase)}/**/*.html`);
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
    getPlugin_writeFile() { return new $WriteFilePlugin(); }

    getPlugin_timberToolsUpdateDocPages() {
        return new $TimberToolsUpdateDocPages();
    }

    /**
     * Documentaion
     */
}