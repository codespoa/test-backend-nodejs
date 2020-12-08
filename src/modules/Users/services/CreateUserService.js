const { hash } = require('bcryptjs')
const AppError = require('../../../shared/error/AppError')


const CreateUserService = (repository) => ({

  async execute({name, email, password}){
    const checkUserExists = await repository.findByEmail(email)

    if(checkUserExists) throw new AppError('This user already in use', 400) 

    const passwordHashed = await hash(password, 8)
  
    const user = await repository.save({
      name,
      email,
      password: passwordHashed,
    })
  
    return user
  }
  
})

module.exports = CreateUserService