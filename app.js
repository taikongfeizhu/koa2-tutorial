const Koa = require('koa');
const middleware = require('./middleware')
const router = require('./routers');

const app = new Koa();

middleware(app)
router(app);

app.listen(3000, () => {
  console.log('server is running at http://127.0.0.1:3000')
});
