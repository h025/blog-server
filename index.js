const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
  ctx.response.body = 'Hello koa';
});

app.listen(80);
