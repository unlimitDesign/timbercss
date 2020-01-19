# Timber CSS Framework by unlimitDesign

`A CSS Framework for Rapid Website Prototyping`

- Documentation site: (https://timbercss.com)

## Quick start

### Through NPM

`npm install timbercss --save`

#### Importing Javascript source and scss into your project.

The best way to find out is to refer to [timber-gridsome-boilerplate](https://github.com/unlimitDesign/timber-gridsome-boilerplate) git repository. The boilerplate demonstrates how to integrate timbercss with [gridsome](https://gridsome.org/) vue.js framework.

Timbercss Javascript in the boilerplate is imported as a prototype definition (see ``Vue.prototype.$timberCore = require("timbercss");`` in [main.js](https://github.com/unlimitDesign/timber-gridsome-boilerplate/blob/master/src/main.js)). Then the timbercss javascript core is initialized with `mounted` and `updated` vue instance lifecycle hooks in the [src/layouts/Default.vue](https://github.com/unlimitDesign/timber-gridsome-boilerplate/blob/master/src/layouts/Default.vue).

Timbercss styles are compiled from scss. Find the scss files under `src/assets/scss`. You can customize the styles by modifying the [_variables_custom.scss](https://github.com/unlimitDesign/timber-gridsome-boilerplate/blob/master/src/assets/scss/_variables_custom.scss) file.

### Using the compiled codes as is

- Download the latest release from [GitHub](https://github.com/unlimitDesign/timbercss/).
- Copy compiled codes under `dist/js` and `dist/css` into your project. And load them  in your html5 page as necessary.

### If you want to play with Timber CSS

- Download the latest release from [GitHub](https://github.com/unlimitDesign/timbercss/).
- Install dependencies with npm: `npm install`
- Run `npm run start` to see the site live as you work on the source.
- Please copy `.timbertools.sample.json` as `.timbertools.json` and then modify the environment file to suit to your needs. You do not have to set every one of config settings.
- Please explore what can be done with the timebrcss framework as the framework is published under the MIT license.

Read [the documentation site](https://timbercss.com) on the framework contents, templates and examples, and more. The documentation hosted at the website is as same as the one under the `docs` directory.

## Bugs and feature requests

Please use [our Github repo issue board](https://github.com/unlimitDesign/timbercss/issues).

## Documentation

Timber CSS's documentation covers pretty much eveyrthing that the framework is capable of.

### Running documentation locally

- You need to be in the root of this project in the terminal.
- Run `npm install` to install the dependencies of Node.js.
- Run `npm run start` to see the site live as you work on the source. Please modify the gulpfile to suit to your needs.
- Open `http://localhost:3000/` in your web browser. Please be advised that you might need to change the serverHost environmental configuration value to `0.0.0.0`.

## Contributing and Community and Versioning

We do not yet have a guideline for it yet. Please give a shout in [the issue board](https://github.com/unlimitDesign/timbercss/issues). if there is anything you would like do for the framework.

## Creators

#### Christian Lundgren

#### Shu Miyao

## Thanks

## Copyright and license

Copyright 2019 [unlimitDesign](https://unlimit.design). Codes are released under [the MIT license](https://github.com/unlimitDesign/timbercss/blob/master/LICENSE).
