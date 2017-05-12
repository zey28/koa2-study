let Koa2 = require('koa')
let MainRoutes = require('./routes/main-routes')
let ErrorRoutes = require('./routes/error-routes')
let logger = require('koa-logger')  // 调试时的访问日志
const app = new Koa2()
const env = process.env.NODE_ENV || 'development' // Current mode
app
    .use(MainRoutes.routes())
    .use(MainRoutes.allowedMethods())   //  默认处理405  ，501错误
    .use(ErrorRoutes())

if (env === 'development') { // logger
  app.use(logger())
}

app.listen(3000)
