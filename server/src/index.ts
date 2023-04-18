import Koa from 'koa'
import cors from '@koa/cors'
import koaStatic from 'koa-static'
import { koaBody } from 'koa-body'

import router from './router/index.ts'

const port = process.env.PORT || 9000

const app = new Koa()

app.use(cors())
app.use(koaBody())
app.use(koaStatic('public'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)

console.log('app is starting at port ' + port)
