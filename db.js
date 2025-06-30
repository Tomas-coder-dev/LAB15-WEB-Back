const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize (
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    logging: false
  }
);
db.authenticate()
  .then(() => {
    console.log('✅ Conexión a MySQL exitosa');
  })
  .catch(err => {
    console.error('❌ Error de conexión:', err);
});

module.exports = db;
