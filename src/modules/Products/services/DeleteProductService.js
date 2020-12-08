const AppError = require('../../../shared/error/AppError')

const DeleteProductService = (repository) => ({

  async execute(code) {
    const checkProductExists = await repository.findByCode(code)

    if (!checkProductExists)
      throw new AppError('This product not exists in system', 404)

    const product = await repository.remove(code)

    return product
  }

})

module.exports = DeleteProductService