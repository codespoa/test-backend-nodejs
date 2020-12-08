const FakesProductRepository = require('../repositories/fakes/FakesProductRepository')
const CreateProductService = require('../services/CreateProductService')
const EditProductService = require('../services/EditProductService')

describe("EditProduct", () => {
  it("should be edit an product", async () => {


    await CreateProductService(FakesProductRepository).execute({
      title: "Aventura Z",
      description: "E mais de 8000 mil",
      price: 10000,
      category: "Melhor que vejeta",
      code: "998877",
    })

    const editProducts = await EditProductService(FakesProductRepository).execute({
      title: "Aventura XYZ",
      description: "E mais de 8000 mil",
      price: 10000,
      category: "Melhor que vejeta",
      code: "998877",
      status: 'inactive'
    })

    expect(editProducts.title).toBe('Aventura XYZ')
    expect(editProducts.description).toBe('E mais de 8000 mil')
    expect(editProducts.price).toBe(10000)
    expect(editProducts.category).toBe('Melhor que vejeta')
    expect(editProducts.code).toBe('998877')
    expect(editProducts.status).toBe('inactive')

    return editProducts
  })

  it("should be not edit a product if not exists", async () => {

    expect(
      EditProductService(FakesProductRepository).execute({
        title: "Aventura Z",
        description: "E mais de 8000 mil",
        price: 10000,
        category: "Melhor que vejeta",
        code: "",
      })

    ).rejects.toThrow('This product not exist')

  })
})

