
let KoaRouter = require('koa-router')

let controllers = require('../controllers/index.js')
const router = new KoaRouter()

router
  .get('/', function (ctx, next) {
    ctx.body = '禁止访问-我只提供api！   '
  }) // HOME 路由
  // .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)

module.exports = router

