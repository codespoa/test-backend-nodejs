const CreateProductService = require("../../../services/CreateProductService")
const DeleteProductService = require("../../../services/DeleteProductService")
const EditProductService = require("../../../services/EditProductService")

const ProductsRepository = require('../../../repositories/ProductsRepository')


const create = async (request, response) => {
  const createProduct = CreateProductService
  const { title, description, price, category, status, code } = request.body

  const product = await createProduct(ProductsRepository).execute({
    title,
    description,
    price,
    category,
    status,
    code
  })

  return response.status(201).json(product)
}

const index = async (request, response) => {
  const products = await ProductsRepository.getAll()

  return response.json(products)

}

const get = async (request, response) => {
  const { code } = request.params
  const products = await ProductsRepository.findByCode(code)

  return response.json(products)

}

const remove = async (request, response) => {
  const deleteProduct = DeleteProductService
  const { code } = request.params

  const product = await deleteProduct(ProductsRepository).execute(code)

  return response.status(204).json(product)

}

const update = async (request, response) => {
  const editProduct = EditProductService
  const { codeParam } = request.params
  const { description, price, category, status, code, title } = request.body

  const product = await editProduct(ProductsRepository).execute({
    title,
    description,
    price,
    category,
    status,
    code,
    codeParam
  })

  return response.status(200).json(product)
}

module.exports = { create, index, get, remove, update }
