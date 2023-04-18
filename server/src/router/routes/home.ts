import haikus from '../../haikus.json'

import Router from 'koa-router'

import BaseController from '../../controllers/baseController.ts'

const home = new Router({ prefix: '/home' })

home.get('/', async (ctx) => {
  ctx.body = BaseController.returnBody(0, '', haikus)
  // ctx.body = haikus
})

export default home
