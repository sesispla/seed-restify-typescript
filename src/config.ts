export interface Config {
  name: string,
  port: number,
  env: string,
  version: string
}

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var port = process.env.NODE_PORT || 3000;
var env = process.env.NODE_ENV || 'development';

export let settings: Config = {
  name: 'typescript-seed',
  version: '1.0.0',
  port: port,
  env: env
};