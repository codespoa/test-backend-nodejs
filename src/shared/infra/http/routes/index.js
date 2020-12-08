const userRoute = require('../../../../modules/Users/infra/http/routes/users.routes')
const sessionsRouter = require('../../../../modules/Users/infra/http/routes/sessions.routes')
const productsRouter = require('../../../../modules/Products/infra/http/routes/products.routes')

const routes = (app) => {
  app.use('/user', userRoute);
  app.use('/session', sessionsRouter)
  app.use('/product', productsRouter)
};

module.exports = routes;
