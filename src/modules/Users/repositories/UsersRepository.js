const UserModel = require('../infra/mongoose/entities/User')

const getAll = async () => await UserModel.find({})

const findById = async id => await UserModel.findById(id)

const findByEmail = async email => await UserModel.findOne({ email })

const save = async (payload) => {
  const { name, email, password } = payload

  const user = new UserModel
  user.name = name
  user.email = email
  user.password = password

  await user.save()

  return user
}

const create = async (payload) => {
  const { name, email, password } = payload

  const user = await UserModel.create({ 
    name,
    email,
    password
  })

  return user
}

const remove = async id => await UserModel.findOneAndDelete({ _id: id });

module.exports = {
  getAll,
  save,
  remove,
  findById,
  findByEmail,
  create
}