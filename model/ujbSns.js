import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { User } from './user.js';

const DataTypes = SQ.DataTypes;

export const UjbSns = sequelize.define('ujbSns', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
UjbSns.belongsTo(User);