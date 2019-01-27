import Koa from 'koa'
import path from 'path'
import staticMidleware from 'koa-static'
import koaWebpack from 'koa-webpack'
import config from '@webpack'
import clientRender from './render/clientRender'

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa()

if(!isProduction) {
  (async ()=> {
    const middleware = await koaWebpack({ config })
    app.use(middleware)
  })()
} else {
  app.use(staticMidleware(
    path.join(__dirname, '../../public')
  ))
}

app.use(clientRender())

app.listen(3000)

