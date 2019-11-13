'use strict';

const gulp = require('gulp');
// const beautify = require('gulp-html-beautify');
const brsync = require('browser-sync');

const beautify_option = {
    'indent_size': 2
}

const tasks = {
    build: function () {
        // @todo
    },
    brsync: function () {
        brsync.init({
            notify: false,
            server: 'docs/'
        });
    },
    reload: function () {
        brsync.reload();
    },
    watch: function () {
        gulp.watch(['**/*.html', '**/*.css', '**/*.js'], ['tasks.reload']);
    }
}

/**
 * Define Tasks
 */
// single tasks
gulp.task('build', tasks.build);

// task:default, multiple tasks
gulp.task('default', gulp.series([tasks.brsync, tasks.watch]));