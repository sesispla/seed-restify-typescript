var fs = require('fs');
import restify = require('restify');
import {settings} from './config';
import {logger} from './logger';

var api = restify.createServer({
  name: settings.name   
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());
api.pre(restify.pre.sanitizePath());
api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());
api.use(restify.fullResponse());

var initializeControllers = function (dir: string) {
  var path = require('path');
  fs.readdirSync(dir).forEach(function (routeConfig: string) {
    var file: any = path.resolve(dir, routeConfig);
    if (routeConfig.substr(-9) === 'Routes.js') {
      //var requiredModule = file.slice(0, -4); // Remove file extension
      var route = require(file); 
      route.routes(api);
    }
    else {
      fs.stat(file, function (err: any, stat: any) {
        if (stat && stat.isDirectory()) {
          initializeControllers(file);
        }
      });
    };
  });
}

initializeControllers(__dirname + '/controllers');

fs.readdirSync(__dirname + '/controllers').forEach(function (routeConfig: string) {
  if (routeConfig.substr(-9) === 'Routes.js') {
    var route = require(__dirname + '/controllers/' + routeConfig);
    route.routes(api);
  }
});

api.listen(settings.port, function () {
  console.log(`INFO: ${settings.name} is running at ${api.url} in mode "${settings.env}"`);
});