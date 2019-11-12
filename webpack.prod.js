const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

// Banner
const version = '0.1.0';
const copyright = 'Copyright © ThemeMountain 2019';
const author = 'Thememountain, Christian Lundgren, Shu Miyao'

// File name output
const outputFolder = 'dist';
const jsFilename = 'tm.core.min.js';
const cssFilename = 'timber.css';
const cssFilenameMin = 'timber.min.css';

// Image Opt
const jpgProgressive = true;
const jpgQuality = 65;
const pngQuality = '65-90';
const pngSpeed = 4;
const gifInterlaced = false;
const webpQuality = 75;

// Purge css whitelist for dynamic classes and patterns
const testWhitelist = ['active', 'disabled', 'no-transition', 'freeze', 'header-compact', 'header-background', 'header-positioned', 'header-in', 'header-out', 'element-reveal-right', 'element-reveal-left', 'slide-in-reset', 'scale-in-reset', 'inactive', 'video-container', 'bg-video-container', 'loaded', 'in-view', 'out-of-view', 'bg-image', 'fixed-dimension', 'tm-lightbox', 'tml-content-wrapper', 'tml-content-wrapper.zoomed', 'tml-inner', 'tml-thumbnail-wrapper', 'tml-thumb-active', 'play', 'tml-content', 'tml-content.error', 'tml-caption', 'tml-nav', 'tml-nav.active', 'tml-nav.tml-next', 'tml-nav.tml-prev', 'tml-zoom', 'tml-thumbnails', 'tml-exit', 'tml-toolbar', 'video', 'iframe', 'object', 'embed'];
const testWhitelistPatterns = [/\bw-\b/];
const purgeCSS = false;

// Plugins
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Modules
module.exports = {
  entry: [path.resolve(__dirname,'./src/js/custom.js'),
          path.resolve(__dirname,'./src/scss/timber.scss')],
  output: {
    path: path.resolve(__dirname, `./${outputFolder}`),
    filename: `./js/${jsFilename}`
  },

  // Modules
  module: {
    rules: [

      // Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // SCSS/CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      // Font files
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'icons',
                publicPath: '../icons'
            }
        }]
      },

      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: /images/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: jpgProgressive,
                quality: jpgQuality
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: pngQuality,
                speed: pngSpeed
              },
              gifsicle: {
                interlaced: gifInterlaced,
              },
              // the webp option will enable WEBP
              webp: {
                quality: webpQuality
              }
            }
          },
        ],
      },
    ]
  },

  // Minifiers
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
      })],
  },

  // Plugins
  plugins: [

    // Css extractor
    new MiniCssExtractPlugin({
        filename: `./css/${cssFilename}`
    }),
    new MiniCssExtractPlugin({
        filename: `./css/${cssFilenameMin}`
    }),

    // Purge css
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'dist')}/**/*.html`,  { nodir: true }),
      whitelist: testWhitelist,
      whitelistPatterns: testWhitelistPatterns
    }),

    // Banner
    new webpack.BannerPlugin({
      banner: `${copyright}\nVersion: ${version}\nHash:[hash]\nChunkhash:[chunkhash]\nFilebase:[filebase]\nAuthor: ${author}\nTimestamp: ${new Date(Date.now())}\n`
    })
 ],
};