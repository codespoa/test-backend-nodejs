const SearchProductService = require("../../../services/SearchProductService")
const ProductsRepository = require('../../../repositories/ProductsRepository')


const searchProduct = async (request, response) => {
  const searchProducts = SearchProductService
  const { title, category, code } = request.query

  const product = await searchProducts(ProductsRepository).execute({ title, category, code })

  return response.status(200).json(product)
}

module.exports = { searchProduct }