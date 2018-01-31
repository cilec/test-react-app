const {StaticRouter} = require("react-router-dom");

const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const statics = require("koa-static");
const bodyParser = require("koa-bodyparser");
const cc = require("../src/index");
const ReactDOMServer = require("react-dom/server");

const router = new Router();
router.get("/", async function(ctx) {
  ctx.body = ReactDOMServer.renderToString(
    <StaticRouter location={ctx.req.url} context={ctx}>
      <cc />
    </StaticRouter>
  );
});
const app = new Koa();
// 设置静态资源目录
app.use(statics(path.join(__dirname, "../public")));
app.use(bodyParser());
app.use(router.routes());
app.listen(3000, err => {
  console.log("Node app is running on port:", PORT);

  // 注册全局未捕获异常处理器
  process.on("uncaughtException", function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on("unhandledRejection", function(reason, p) {
    console.error(
      "Unhandled Rejection at: Promise ",
      p,
      " reason: ",
      reason.stack
    );
  });
});
