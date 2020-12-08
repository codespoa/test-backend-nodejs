const AppError = require('../../../shared/error/AppError')

const CreateProductService = (repository) => ({

  async execute({
    title,
    description,
    price,
    category,
    status,
    code
  }) {
    const checkProductExists = await repository.findByCode(code)

    if (checkProductExists)
      throw new AppError('This code already exists in the system', 404)

    const product = await repository.create({
      title,
      description,
      price,
      category,
      status,
      code
    })

    return product
  }

})

module.exports = CreateProductService