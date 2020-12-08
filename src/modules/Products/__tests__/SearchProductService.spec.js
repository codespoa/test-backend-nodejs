const FakesProductRepository = require('../repositories/fakes/FakesProductRepository')
const CreateProductService = require('../services/CreateProductService')
const SearchProductService = require('../services/SearchProductService')

describe("SearchProduct", () => {
  it("is should return null if you can't find the product", async () => {

     await CreateProductService(FakesProductRepository).execute({
      title: "Aventura Z",
      description: "E mais de 8000 mil",
      price: 10000,
      category: "Melhor que vejeta",
      code: "998877"
    })

    const products = SearchProductService(FakesProductRepository).execute({
      title: 'Aventura XYZ',
      code: '97',
      category: 'Melhor que goku'
    })

    expect(products).rejects.toThrow()


    return products

  })

})
