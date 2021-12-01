import SQ from 'sequelize';
import { User } from './user.js';
import { sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;

export const IssueBoard = sequelize.define(
  'issueboard', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
);
IssueBoard.belongsTo(User);