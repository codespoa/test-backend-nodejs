const ProductModel = require('../infra/mongoose/entities/Product')

const getAll = async () => await ProductModel.find({})

const findByCode = async code => await ProductModel.findOne({ code })

const save = async (payload) => {
  const { title, description, price, category, status, code } = payload

  console.log(code)

  const product = await ProductModel.findOne({ code })

  console.log(product)

  product.title = title
  product.description = description
  product.price = price
  product.category = category
  product.code = code
  product.status = status

  await product.save()

  return product
}

const findProduct = async ({ title, category, code }) => await ProductModel.find().or([{ title }, { category },  { code }])

const create = async (payload) => {
  const { title, description, price, category, status, code } = payload

  const product = await ProductModel.create({
    title,
    description,
    price,
    category,
    status,
    code
  })

  return product
}

const remove = async codeParam => await ProductModel.findOneAndDelete({code: codeParam})

module.exports = {
  getAll,
  findByCode,
  save,
  remove,
  create,
  findProduct
}