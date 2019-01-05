const HomeController = require('../controller/home');

module.exports = (router, upload) => {

  router.get( '/', HomeController.index );

  router.get('/home', HomeController.home);

  router.get('/home/:id/:name', HomeController.homeParams);

  router.get('/user', HomeController.login);

  router.get('/data', HomeController.data);

  router.get('/upload', HomeController.upload);

  router.post('/user/register', HomeController.register);

  router.post('/profile', upload.single('avatar'), HomeController.profile);
}
