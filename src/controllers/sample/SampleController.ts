import restify = require('restify');

export default class SampleController {

	get(req: restify.Request, res: restify.Response, next: restify.Next) {
		res.json(200, 'pong');
		return next();
	}
}