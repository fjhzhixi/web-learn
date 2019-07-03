var Koa = require('koa');
var Router = require('koa-router');
var router = new Router();

var app = new Koa();

router.get('/', async (ctx, next) => {
    ctx.response.body = 'hello word';
    await next();
});

router.get('/list', async (ctx, next) => {
    ctx.response.body = 'list';
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);