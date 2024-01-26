const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('@koa/router')
const cors = require('@koa/cors')

const app = new koa()

app.use(bodyParser())
app.use(cors())

const router = new Router()

router.post('/login', (ctx) => {
  ctx.body = {
    token: 'token...'
  }
})


app.use(router.routes())

const port = 3001

app.listen(port)
console.log('server start port:' + port)