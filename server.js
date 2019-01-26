import Koa from 'koa'
import path from 'path'
import staticMidleware from 'koa-static'
import koaWebpack from 'koa-webpack'
import config from './webpack.config.babel'

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa()

if(!isProduction) {
  koaWebpack({ config })
    .then((middleware) => {
      app.use(middleware);
    });
} else {
  app.use(staticMidleware(
    path.join(__dirname, './public')
  ))
}

app.listen(3000)

