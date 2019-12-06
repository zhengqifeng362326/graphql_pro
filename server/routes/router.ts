import KoaRouter from 'koa-router'
import login from '../controllers/login'

const router = new KoaRouter()

router.get('/login', login.doLogin)

export default router
