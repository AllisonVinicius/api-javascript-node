const Sequelize = require('sequelize');

const sequelize = new Sequelize('imovel', 'root', "", {
    dialect: 'mysql',
    host: 'localhost',
    port: '3308'
    
});

module.exports = sequelize;