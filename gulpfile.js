'use strict';

const Gulp = require('gulp');
// csstoc
const Csstoc = require('./src/gulp-lib/csstoc.js');
// const beautify = require('gulp-html-beautify');
const Brsync = require('browser-sync');

const beautify_option = {
    'indent_size': 2
}

const tasks = {
    /**
     * Tasks to be kept running
     */
    // Browser live update
    brsync: function () {
        Brsync.init({
            notify: false,
            server: 'docs/'
        });
    },
    watch: function () {
        Gulp.watch(['./docs/**/*.html', './docs/**/*.css', './docs/**/*.js'], tasks.reload);
    },
    /**
     * Tasks called as necessary
     */
    reload: function (done) {
        Brsync.reload();
        done();
    },
    build_docs: function (done) {
        // @todo
        done();
    },
    csstoc: function (done) {
        Csstoc({
            sectionString: 'section',
            tocHead: 'Timber CSS Framework by unlimit.design - Table Of Contents'
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
Gulp.task('build_docs', tasks.build_docs);
Gulp.task('csstoc', tasks.csstoc);

// task:default, multiple tasks
Gulp.task('default', Gulp.parallel(tasks.brsync, tasks.watch));