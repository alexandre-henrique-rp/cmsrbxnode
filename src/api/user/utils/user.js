import { DataTypes } from 'sequelize';
import DB from '../../../../database/db';


// Crie o modelo do usuário
const User = DB.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  authorization: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

// Sincronize o modelo com o banco de dados
await User.sync();