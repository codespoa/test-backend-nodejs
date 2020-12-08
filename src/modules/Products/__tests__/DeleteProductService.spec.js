const FakesProductRepository = require('../repositories/fakes/FakesProductRepository')
const DeleteProductService = require('../services/DeleteProductService')
const CreateProductService = require('../services/CreateProductService')


describe('DeleteProduct', () => {

  it('should check if a code does not exist', async () => {

    await CreateProductService(FakesProductRepository).execute({
      title: "Aventura Z",
      description: "E mais de 8000 mil",
      price: 10000,
      category: "Melhor que vejeta",
      code: "9988"
    })

    const deleteProduct = DeleteProductService(FakesProductRepository).execute('1')

    expect(deleteProduct).rejects.toThrow()

  })

})
