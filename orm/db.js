const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('restaurant', 'root', 'chalecbi_root_admin', {
    host: '194.163.151.217',
    port: 3308,
    dialect: 'mysql',
  });

module.exports = sequelize