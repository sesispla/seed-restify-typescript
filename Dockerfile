FROM node:latest

ENV APP_HOME=/usr/src/svc
ENV NODE_ENV=production
ENV NODE_PORT=3000

RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

COPY ./package.json ${APP_HOME}
COPY ./build ${APP_HOME}/build

RUN echo Installing dependencies in mode ${NODE_ENV} && npm install

EXPOSE 3000

CMD ["npm", "start"]