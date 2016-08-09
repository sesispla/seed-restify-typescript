'use strict';
var root = './src/';
var gulpConfig = {
    ts: root + '**/*.ts',
    typings: './typings/**/*.ts',
    outputFolder: './build/',
    tests: root + '**/*.spec.ts'
}

module.exports = gulpConfig;