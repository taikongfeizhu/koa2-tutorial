const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const session = require('koa-session');

const config = require('../config');
const miSend = require('./mi-send');
const { store } = require('../redis');

module.exports = (app) => {

  app.keys = ['a1232adfasdfwerllkladf'];

  app.use(staticFiles(path.resolve(__dirname, "../public")));
  
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));
  app.use(session({
    ...config,
    store,
  }, app));
  app.use(bodyParser());
  app.use(miSend());
};
