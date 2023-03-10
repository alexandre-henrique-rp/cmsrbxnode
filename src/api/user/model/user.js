import { DataTypes } from 'sequelize';
import DB from '../../../../database/db';

const User = DB.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  authorization: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  tableName: 'users',
});

export default User;
