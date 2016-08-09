# Micro(Rest)service seed project

A Restify template seed project, using Typescript.

What you get:
* REST Services: restify
* Language: Typescript (Typings included)
* Client side tooling: gulp
* Logging: bunyan
* Test runner: mocha
* Asserts: chai
* Mocking: sinon
* Docker ready project

## Getting started:

```
npm run restore
npm run build
npm test
npm start
```

## Deploy to Docker:
```
docker build -t=sesispla/ping-svc .
docker run -d -p 8080:3000 sesispla/ping-svc
```
