import { BaseContext } from 'koa'
import BasicControl from './index'

import '../mongo/connect'

interface LoginInterface {
  doLogin: (ctx: BaseContext) => void
}

class LoginControl extends BasicControl implements LoginInterface {
  public doLogin = async (ctx: BaseContext) => {
    this.setHeaders(ctx, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    this.sendResponse(ctx, {
      account: 'zhengqifeng',
      password: 'zqf'
    })
  }
}

export default new LoginControl()