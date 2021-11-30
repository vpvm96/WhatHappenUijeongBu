import SQ from 'sequelize';
import { User } from '../model/user.js'
import { QnaBoard } from './../model/qnaBoard.js';

const Sequelize = SQ.Sequelize;

const INCLUDE_USER = {
  attribute: [
    'id',
    'content',
    'createdAt',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attribute: [],
  },
};

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return QnaBoard.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return QnaBoard.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return QnaBoard.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(title, content, userId) {
  return QnaBoard.create({ title, content, userId }) //
    .then((data) => this.getById(data.dataValues.id));
}

export async function update(id, content) {
  return QnaBoard.findByPk(id, INCLUDE_USER) //
    .then((board) => {
      board.content = content;
      return board.save();
    });
}

export async function remove(id) {
  return QnaBoard.findByPk(id) //
    .then((board) => {
      board.destroy();
    });
}
