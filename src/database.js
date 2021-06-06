const Sequelize = require('sequelize');
const sequelize = new Sequelize('imoveis', 'mysql','1234', {
    host: 'localhost',
    dialec: 'mysql'
});

module.exports = sequelize;