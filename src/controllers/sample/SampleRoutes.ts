import restify = require('restify');
import SampleController from './SampleController'

function sampleRoute(api:restify.Server) {
  let routeCtrl = new SampleController();
  api.get('/api/ping', routeCtrl.get);
}

module.exports.routes = sampleRoute;