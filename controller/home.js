const fs = require('fs');
const path = require('path');
const HomeService = require('../service/home');
const { client } = require('../redis');

module.exports = {
  index: async (ctx, next) => {
    client.set('name', 'huangjian1820');
    client.get('name', (err, value) => {
      console.log(value);
    });

    if (ctx.path === '/favicon.ico')  {
      return;
    }

    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    await ctx.render("home/index", {
      title: "iKcamp欢迎您",
      viewNum: n
    });
  },

  home: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = '<h1>HOME page</h1>';
  },

  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = '<h1>HOME page /:id/:name</h1>';
  },

  login: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GoGoGo'
    });
  },
  
  upload: async (ctx, next) => {
    await ctx.render('home/upload', {
      btnName: 'GoGoGo'
    });
  },
  
  data: async (ctx, next) => {
    await ctx.send({
      status: 'success',
      data: 'hello world'
    });
  },
  
  register: async (ctx, next) => {
    const params = ctx.request.body;
    const { name, password } = params;
    const res = await HomeService.register(name, password)
    if (res.status == "-1") {
      await ctx.render("home/login", res.data);
    } else {
      ctx.state.title = "个人中心";
      await ctx.render("home/success", res.data);
    }
  },
  
  profile: async (ctx, next) => {
    const {
      originalname,
      path: out_path,
    } = ctx.req.file;
    
    const newName = out_path + path.parse(originalname).ext;
    const err = fs.renameSync(out_path, newName);
    let result;
    
    if (err) {
      result = JSON.stringify(err);
    } else {
      result = '<h1>upload success</h1>';
    }
    ctx.body = result;
  }
}
