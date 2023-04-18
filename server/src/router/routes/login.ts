import Router from 'koa-router'
import { koaBody } from 'koa-body'

const login = new Router({ prefix: '/login' })

login.post('/', koaBody(), async (ctx) => {
  ctx.body = { code: 0, data: ctx.request.body }
})

export default login
