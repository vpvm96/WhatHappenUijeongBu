import { User } from '../model/user.js'

export async function findByUsername(username) {
  return User.findOne({ where: {username} })
}

export async function findById(id) {
  return User.findByPk(id)
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id)
}
