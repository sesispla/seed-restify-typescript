var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');
var config = require('./gulpConfig');

gulp.task('clean', function() {
    return gulp
        .src([
            config.outputFolder + '/*',
            '!node_modules/**',
            '!typings/**',
            '!gulpfile.js',
            '!bin/**'
        ], {read: false})
        .pipe(clean())    
});

gulp.task('build', function() {
    var sourceTsFiles = [config.ts, config.typings];
    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    tsResult.dts.pipe(gulp.dest(config.outputFolder));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputFolder));    
});

gulp.task('rebuild', ['clean', 'build']);
gulp.task('default', ['rebuild']);