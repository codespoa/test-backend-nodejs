const FakesProductRepository = require('../repositories/fakes/FakesProductRepository')
const CreateProductService = require('../services/CreateProductService')

describe("CreateProduct", () => {
  it("should be able to create a new product", async () => {

    const product = await CreateProductService(FakesProductRepository).execute({
      title: "Aventura Z",
      description: "E mais de 8000 mil",
      price: 10000,
      category: "Melhor que vejeta",
      code: "998877"
    })

    expect(product).toHaveProperty('title')
    expect(product).toHaveProperty('description')
    expect(product).toHaveProperty('price')
    expect(product).toHaveProperty('category')
    expect(product).toHaveProperty('code')

    return product

  })

  it("should be not create two product with same code", async () => {
    createProduct = CreateProductService

    expect(
      createProduct(FakesProductRepository).execute({
        title: "Aventura Z",
        description: "E mais de 8000 mil",
        price: 10000,
        category: "Melhor que vejeta",
        code: "998877"
      })

    ).rejects.toThrow()

  })
})

