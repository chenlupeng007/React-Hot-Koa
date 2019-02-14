import Router from 'koa-router'
import clientRender from './clientRender'

const router = new Router()
router.get('/*', clientRender())

export default router