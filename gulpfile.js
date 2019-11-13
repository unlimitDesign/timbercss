'use strict';

const Gulp = require('gulp');
// csstoc
const Csstoc = require('./src/gulp/csstoc.js');
// const beautify = require('gulp-html-beautify');
const Brsync = require('browser-sync');

const beautify_option = {
    'indent_size': 2
}

const tasks = {
    build: function (done) {
        // @todo
        done();
    },
    brsync: function () {
        Brsync.init({
            notify: false,
            server: 'docs/'
        });
    },
    reload: function () {
        Brsync.reload();
    },
    watch: function () {
        // @todo gulp watch not working
        Gulp.watch(['**/*.html', '**/*.css', '**/*.js'], ['tasks.reload']);
    },
    csstoc: function (done) {
        Csstoc({
            sectionString: 'section',
            tocHead: 'Boilerplate - Table Of Contents'
        }, {
            'docs-timber': ['./docs/css/timber.css']
        });
        done();
    }
}

/**
 * Define Tasks
 */
// single tasks
Gulp.task('build', tasks.build);
Gulp.task('csstoc', tasks.csstoc);

// task:default, multiple tasks
Gulp.task('default', Gulp.series([tasks.brsync, tasks.watch]));