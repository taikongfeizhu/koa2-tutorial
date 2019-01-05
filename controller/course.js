const db = require('../nosql');

const {
  getCourseList,
  getCourseById,
  addCourse,
  updateCourse,
  removeCourse
} = db;

module.exports = {
  getCourseList: async (ctx) => {
    const courseList = await getCourseList();
    ctx.body = {
      status: 0,
      data: courseList
    };
  },

  getCourseById: async (ctx) => {
    const id = ctx.params.id;
    const course = await getCourseById(id);
    ctx.body = {
      status: 0,
      success: true,
      data: course
    };
  },

  addCourse: async (ctx) => {
    await addCourse(ctx.body);
    ctx.body = {
      status: 0
    };
  },

  updateCourse: async (ctx) => {
    await updateCourse(ctx.params.id, ctx.body);
    ctx.body = {
      status: 0
    };
  },

  removeCourse: async (ctx) => {
    await removeCourse(ctx.params.id);
    ctx.body = {
      status: 0
    };
  }
};