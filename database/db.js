import dotenv from 'dotenv';
dotenv.config()
import { Sequelize } from 'sequelize';

const database = process.env;
const username = process.env;
const password = process.env;
const localhost = process.env;
const mysql = process.env;

const DB = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default DB;