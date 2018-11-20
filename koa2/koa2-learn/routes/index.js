const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('我是王安');
  await ctx.render('index', {
    title: '开始来写koa吧!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
