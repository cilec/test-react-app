'use strict';
const path = require('path');
const fs = require('fs')

const Koa = require('koa');
const Router = require('koa-router');

const statics = require('koa-static');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(statics(path.join(__dirname, '../build')))

const router = new Router();
router.get("/", async function (ctx) {
    ctx.type = "html"
    ctx.body = fs.createReadStream('build/index.html')
})
app.use(router.routes());
let PORT = 3000;
app.listen(PORT, function (err) {
    console.log('Node app is running on port:', PORT);

    // 注册全局未捕获异常处理器
    process.on('uncaughtException', function (err) {
        console.error("Caught exception:", err.stack);
    });
    process.on('unhandledRejection', function (reason, p) {
        console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
    });
});