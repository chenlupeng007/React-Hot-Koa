import koaWebpack from 'koa-webpack'
import router from './router'

import config from '../../webpack.config.babel'

export default async (app) => {
  const middleware = await koaWebpack({ config })

  app.use(middleware)
  app.use(router.routes()).use(router.allowedMethods())
}