import log4js from 'koa-log4'

log4js.configure('../logs/err.log')

export const accessLogger = log4js.koaLogger(log4js.getLogger('access'))
