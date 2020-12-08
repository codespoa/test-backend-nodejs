const { v4: uuidv4 } = require('uuid');
const ProductModel = require('../../infra/mongoose/entities/Product')

const products = []

function create(payload) {
  const { title, description, price, category, status, code } = payload
  const product = new ProductModel()

  console.log(payload)

  Object.assign(product, { id: uuidv4() }, title, description, price, category, status, code)

  products.push(product)

  return product
}

function getAll() {
  const findProduct = products.find((user) => user.id === id)

  return findProduct
}

function findByCode(code) {
  const findProduct = products.find((product) => product.code === code)

  return findProduct
}


function save(product) {
  const findIndex = products.findIndex((findProduct) => findProduct.id === product.id)

  products[findIndex] = product

  return product
}

function findProduct(title, category, code) {
  const findProduct = products.find((product) => product.title === title || product.category === category || product.code === code)

  return findProduct
}


function remove(code) {
  const findProduct = products.find((product) => product.code === code)
  return findProduct
}

module.exports = { getAll, findByCode, create, save, findProduct, remove }