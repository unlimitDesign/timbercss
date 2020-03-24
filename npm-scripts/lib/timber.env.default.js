const Package = require('../../package.json');

module.exports = {

    // Version, copyright and credits information
    version: Package.version,
    copyright: 'Copyright © UnlimitDesign 2020',
    authorCredits: 'UnlimitDesign, Christian Lundgren, Shu Miyao',

    // Server configs
    serverPort: '3000',
    serverHost: 'localhost',
    disableHostCheck: true,
    contentBase: 'dist',
    serverPublicPath: '/js/',
    watchEnabled: true,
    watchContentBase: true,
    enableHotModuleReplacement: true,

    // Source directory
    contentSourceDir: 'src/',

    // Output directory.  Must be the same as contentBase otherwise live preview does not work
    outputDir: 'dist',

    // Timber lib source file paths
    timberJsSrcFilePath: './src/js/custom.js',
    timberCssSrcFilePath: './src/scss/timber.scss',

    // Timber lib production file names
    timberJsFileName: 'tm.core.js',
    timberJsMinFileName: 'tm.core.min.js',
    timberCssFilePath: 'timber.css',
    timberCssFileMinPath: 'timber.min.css',

    // Image output options
    jpgProgressive: true,
    jpgQuality: '65',
    pngQuality: '5-90',
    pngSpeed: '4',
    gifInterlaced: false,
    webpQuality: '75',

    // PurgeCSS options
    enablePurgeCSS: false,
    purgeCSS_whitelist: [

        /* Timber dynamic classes & elements */
        'video',
        'iframe',
        'object',
        'embed',
        'img',
        'video-container',
        'bg-video-container',
        'loaded',
        'in-view',
        'out-of-view',
        'bg-image',
        'fixed-dimension',
        'active',
        'inactive',
        'disabled',
        'no-transition',
        'freeze',
        'header-compact',
        'header-background',
        'header-positioned',
        'header-in',
        'header-out',
        'element-reveal-right',
        'element-reveal-left',
        'slide-in-reset',
        'scale-in-reset',
        'tm-lightbox',
        'tml-content-wrapper',
        'tml-content-wrapper.zoomed',
        'tml-inner',
        'tml-thumbnail-wrapper',
        'tml-thumb-active',
        'play',
        'tml-content',
        'tml-content.error',
        'tml-caption',
        'tml-nav',
        'tml-nav.active',
        'tml-nav.tml-next',
        'tml-nav.tml-prev',
        'tml-zoom',
        'tml-thumbnails',
        'tml-exit',
        'tml-toolbar',
        'preloader'
    ],
    purgeCSS_whitelistPatterns: [/\bw-\b/]
}