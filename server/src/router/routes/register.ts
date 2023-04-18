import Router from 'koa-router'
import BaseController from '../../controllers/baseController.ts'

const register = new Router({ prefix: '/register' })

register.post('/', async (ctx) => {
  console.log(ctx.request.body)
  ctx.body = BaseController.returnBody(0, '', ctx.request.body)
})

export default register
