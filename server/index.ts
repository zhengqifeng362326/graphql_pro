import Koa from 'koa'
import KoaStatic from 'koa-static'
import path from 'path'

import router from './routes/router'
import { accessLogger } from './middleware/log'

const app = new Koa()

app.use(KoaStatic(path.resolve(process.cwd(), 'public')))

app.use(router.routes())
app.use(router.allowedMethods())
app.use(accessLogger)

app.listen(3000, () => {
  console.log('server has been start')
})
