const path = require('path');
const Router = require('koa-router');
const multer = require('koa-multer');
const conn = require('../nosql/conn');

const home = require('./home');
const customer = require('./customer');
const course = require('./course');

const router = new Router();

const { connect, close } = conn;

const upload = multer({
  dest: path.join(process.cwd(), "uploads"),
});

module.exports = (app) => {
   home(router, upload),
   customer(router),
   course(router),

   app.use(async (context, next) => {
     try {
       await next();
     } catch (ex) {
       context.body = {
         status: -1,
         message: ex.message
       }
     }
   })

  app.use(async (context, next) => {
    await connect();
    await next();
    await close();
  })

  app.use(router.routes()).use(router.allowedMethods());

};