const AppError = require('../../../shared/error/AppError')

const EditProductService = (repository) => ({

  async execute({
    title,
    description,
    price,
    category,
    status,
    code,
    codeParam
  }) {
    const checkProductExists = await repository.findByCode(codeParam)

    if (!checkProductExists)
      throw new AppError('This product not exist', 404)

    const product = await repository.save({
      title,
      description,
      price,
      category,
      status,
      code,
      codeParam,
    })

    return product
  }

})

module.exports = EditProductService











