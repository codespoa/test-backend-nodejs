const { Router } = require('express')
const productsRouter = Router()
const productsController = require("../controllers/ProductsController")
const searchProductsController = require("../controllers/SearchProductsController")

const Validate = require("../../../../../shared/middlewares/validate")
const validatorsProduct = require("../../../../../shared/validators/Product")

const ensureAuthenticad = require('../../../../Users/infra/http/middleware/ensureAuthenticad')

productsRouter.use(ensureAuthenticad)

const Resolver = require('../../../../../shared/middlewares/adpter')

productsRouter.post("/", Validate(validatorsProduct.create), Resolver(productsController.create))
productsRouter.get("/", Resolver(productsController.index))
productsRouter.put("/:codeParam", Validate(validatorsProduct.edit), Resolver(productsController.update))
productsRouter.get("/search", Resolver(searchProductsController.searchProduct))
productsRouter.get("/:code", Resolver(productsController.get))
productsRouter.delete("/:code", Resolver(productsController.remove))


module.exports = productsRouter
