const { Sequelize } = require('sequelize');

// Update the configuration with your remote MySQL details
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'sql.freedb.tech',  // e.g., mysql1.remotemysql.com
  dialect: 'mysql',  // Set MySQL as the dialect
  port: 3306,        // Default MySQL port (can vary)
  logging: false
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
