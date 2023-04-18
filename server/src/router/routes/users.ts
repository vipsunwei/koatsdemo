import Router from 'koa-router'

import BaseController from '../../controllers/baseController.ts'

const users = new Router({ prefix: '/users' })

users.get('/:id', async (ctx) => {
  const id = ctx.params.id
  const haha = {
    code: id,
    data: [
      { name: 'vipsunwei', age: 35 },
      { name: 'luwei', age: 25 },
      { name: 'luwei1', age: 25 },
    ],
  }
  ctx.body = BaseController.returnBody(0, '', haha)
})

export default users
