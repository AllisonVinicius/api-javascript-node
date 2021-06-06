const Sequelize = require('sequelize');
const sequelize = new Sequelize('imoveis', 'mysql','', {
    host: 'localhost',
    dialec: 'mysql'
});

module.exports = sequelize;