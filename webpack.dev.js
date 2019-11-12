const path = require('path');
const webpack = require('webpack');

// File name output
const outputFolder = 'dist';
const jsFilename = 'tm.core.min.js';
const cssFilename = 'timber.css';

// Server and HMR
const devServerPort = 3000;
const hmr = true;

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Modules
module.exports = {
  entry: [path.resolve(__dirname,'./src/js/custom.js'),
          path.resolve(__dirname,'./src/scss/timber.scss')],
  output: {
    path: path.resolve(__dirname, `./${outputFolder}`),
    filename: `./js/${jsFilename}`
  },

  // Server
  devServer: {
    port: devServerPort,
    contentBase: path.resolve(__dirname, `./${outputFolder}`), 
    watchContentBase: true
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
    ]
  },

  // Plugins
  plugins: [

    // Css extractor
    new MiniCssExtractPlugin({
        filename: `./css/${cssFilename}`
    }),
 ],

 // HMR 
 watch: hmr
};