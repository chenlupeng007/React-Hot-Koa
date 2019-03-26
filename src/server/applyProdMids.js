import path from 'path'
import staticMidleware from 'koa-static'
import router from './router'

export default (app) => {
  app.use(staticMidleware(
    path.join(__dirname, '../../public/')
  ))

  app.use(router.routes()).use(router.allowedMethods())
}