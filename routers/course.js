const CourseController = require('../controller/course');

module.exports = (router) => {
  router.get('/course', CourseController.getCourseList);
  router.get('/course/:id', CourseController.getCourseById);
  router.post('/course', CourseController.addCourse);
  router.put('/course/:id', CourseController.updateCourse);
  router.delete('/course/:id', CourseController.removeCourse);
};
