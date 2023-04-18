import Router from 'koa-router'

import home from './routes/home.ts'
import register from './routes/register.ts'
import login from './routes/login.ts'
import users from './routes/users.ts'

const routes = [register, home, login, users]

const router = new Router({ prefix: '/api' })

// const routes = ['home', 'login', 'users']

const createRouters = async () => {
  for (let i = 0, l = routes.length; i < l; i++) {
    // const route = await import(`./routes/${routes[i]}`).then((r) => r.default)
    const route = routes[i]
    router.use(route.routes(), route.allowedMethods())
  }
}

createRouters()

export default router
