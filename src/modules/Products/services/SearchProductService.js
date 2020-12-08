const AppError = require('../../../shared/error/AppError')

const SearchProductService = (repository) => ({

  async execute({ title, category, code }) {

    const checkProductExists = await repository.findProduct({ title, category, code })

    if (!checkProductExists)
      throw new AppError('This product not exist', 404)

    return checkProductExists
  }

})

module.exports = SearchProductService