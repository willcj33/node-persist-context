"use strict";

const gulp   = require('gulp');
const clean  = require('gulp-clean');
const tar    = require('gulp-tar');
const gzip   = require('gulp-gzip');
const config = require('./package.json');

gulp.task("clean", function() {
    return gulp.src(["dist/*.tar.gz"], {read: false})
        .pipe(clean())
});

gulp.task("dist", ["clean"], function() {
    // Create dist file for the service
    return gulp.src([
            "./*.json",
            "!./app.config.json",
            "./*.js",
            "./routes/**",
            "./schemas/**",
            "./services/**",
            "!./.vscode/**"
        ], { base: "./" })
        .pipe(tar('test-context-proxy' + ".tar"))
        .pipe(gzip())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["dist"]);