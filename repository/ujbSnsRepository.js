import SQ from 'sequelize';
import { UjbSns } from '../model/ujbSns.js';
import { User } from '../model/user.js'

const Sequelize = SQ.Sequelize;

const INCLUDE_USER = {
  attributes: [
    'id',
    'text',
    'createdAt',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return UjbSns.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return UjbSns.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return UjbSns.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(text, userId) {
  return UjbSns.create({ text, userId }) //
    .then((data) => this.getById(data.dataValues.id));
}

export async function update(id, text) {
  return UjbSns.findByPk(id, INCLUDE_USER) //
    .then((sns) => {
      sns.text = text;
      return sns.save();
    });
}

export async function remove(id) {
  return UjbSns.findByPk(id) //
    .then((sns) => {
      sns.destroy();
    });
}
