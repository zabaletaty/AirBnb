const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'ruth',
  database: 'postgres',

});

module.exports = { db };