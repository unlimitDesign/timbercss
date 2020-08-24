# Timber CSS Framework by unlimitDesign

`A CSS Framework for Rapid Website Prototyping`

- Documentation site: (https://timbercss.com)

## Quick start

- Install dependencies with npm: `npm install`
- Run `npm run start` to see the site live as you work on the source under the `dist` content base directory.
- Please freely explore what can be done with the timebrcss framework as the framework is published under the MIT license.

Read [the documentation site](https://timbercss.com) on the framework contents, templates and examples, and more. The documentation hosted at the website is as same as the one under the `docs` directory.

### Using .env file to have different configuration depending on your local environment.

You can use `.timber.env.json` environment file in the project root to alternate default settings to suit to your needs. You do not have to set every one of config settings. Shown below is an example of the environment file.

```json
{
  "serverHost": "0.0.0.0",
  "enablePurgeCSS": true
}
```

Available settings are as follows:

#### Server configs

| Variable                   | Default Value |
| -------------------------- | ------------- |
| serverPort                 | '3000'        |
| serverHost                 | 'localhost'   |
| disableHostCheck           | true          |
| contentBase                | 'dist'        |
| serverPublicPath           | '/js/'        |
| watchEnabled               | true          |
| watchContentBase           | true          |
| enableHotModuleReplacement | true          |

#### Source directory

| Variable         | Default Value |
| ---------------- | ------------- |
| contentSourceDir | 'src/'        |

#### Output directory

| Variable  | Default Value | Notes                                                                    |
| --------- | ------------- | ------------------------------------------------------------------------ |
| outputDir | 'dist'        | Must be the same as contentBase otherwise the live preview does not work |

#### Timber lib source file paths

| Variable             | Default Value            |
| -------------------- | ------------------------ |
| timberJsSrcFilePath  | './src/js/custom.js'     |
| timberCssSrcFilePath | './src/scss/timber.scss' |

#### Timber lib production file names

| Variable             | Default Value    |
| -------------------- | ---------------- |
| timberJsFileName     | 'tm.core.js'     |
| timberJsMinFileName  | 'tm.core.min.js' |
| timberCssFilePath    | 'timber.css'     |
| timberCssFileMinPath | 'timber.min.css' |

#### Image output options

| Variable       | Default Value |
| -------------- | ------------- |
| jpgProgressive | true          |
| jpgQuality     | '65'          |
| pngQuality     | '5-90'        |
| pngSpeed       | '4'           |
| gifInterlaced  | false         |
| webpQuality    | '75'          |

#### PurgeCSS opions

| Variable                   | Default Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Notes                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| enablePurgeCSS             | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | This option is set to false by default. Please make sure that you have html files under the contentBase directory |
| purgeCSS_whitelist         | ['video','iframe','object','embed','img','video-container','bg-video-container','loaded','in-view','out-of-view','bg-image','fixed-dimension','active','inactive','disabled','no-transition','freeze','header-compact','header-background','header-positioned','header-in','header-out','element-reveal-right','element-reveal-left','slide-in-reset','scale-in-reset','tm-lightbox','tml-content-wrapper','tml-content-wrapper.zoomed','tml-inner','tml-thumbnail-wrapper','tml-thumb-active','play','tml-content','tml-content.error','tml-caption','tml-nav','tml-nav.active','tml-nav.tml-next','tml-nav.tml-prev','tml-zoom','tml-thumbnails','tml-exit','tml-toolbar'] | You need to set as array.                                                                                         |
| purgeCSS_whitelistPatterns | ["/\bw-\b/"]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Use regular expression values in string. Use array if you have multiple patterns.                                 |

#### Debug

| Variable | Default Value | Notes                             |
| -------- | ------------- | --------------------------------- |
| debug    | false         | Outputs current webpack settings. |

### Using the compiled codes as is

- Download the latest release from [GitHub](https://github.com/unlimitDesign/timbercss/).
- Copy compiled codes under `dist/js` and `dist/css` into your project. And load them in your html5 page as necessary.

## Bugs and feature requests

Please use [our Github repo issue board](https://github.com/unlimitDesign/timbercss/issues).

## Documentation

Timber CSS's documentation covers pretty much eveyrthing that the framework is capable of.

## Contributing and Community and Versioning

We do not yet have a guideline for it yet. Please give a shout in [the issue board](https://github.com/unlimitDesign/timbercss/issues). if there is anything you would like do for the framework.

## Creators

#### Christian Lundgren

#### Shu Miyao

## Thanks

## Copyright and license

Copyright 2020 and beyond [unlimitDesign](https://unlimit.design). Codes are released under [the MIT license](https://github.com/unlimitDesign/timbercss/blob/master/LICENSE).
