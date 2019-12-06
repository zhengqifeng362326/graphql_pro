import { BaseContext } from 'koa'

interface HeadersInterface {
  [name: string]: string
}
interface BasicInterface {
  setHeaders: (ctx: BaseContext, headers: HeadersInterface) => void
  sendResponse: (ctx: BaseContext, body: any) => void
}

export default class BasicControl {
  setHeaders(ctx: BaseContext, headers: HeadersInterface) {
    for (let key of Object.keys(headers)) {
      ctx.append(key, headers[key])
    }
  }
  sendResponse(ctx: BaseContext, body: any) {
    ctx.body = body
  }
}