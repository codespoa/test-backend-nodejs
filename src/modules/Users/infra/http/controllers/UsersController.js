const CreateUserService = require("../../../services/CreateUserService")
const UserRepository = require("../../../repositories/UsersRepository")


const create = async (request, response) => {
  const createUser = CreateUserService
  const { name, email, password } = request.body

  const user = await createUser(UserRepository).execute({
    name,
    email,
    password
  })

  return response.status(201).json(user)
}

module.exports = { create }