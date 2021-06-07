const Sequelize = require('sequelize');
const sequelize = require('../database');



const schema = 'user';

class User extends Sequelize.Model {}
User.init({
    nome: Sequelize.STRING,
    cpf: Sequelize.INTEGER,
    email: Sequelize.STRING,
    password: Sequelize.STRING   
  

}, {sequelize, modelName: 'user', schema});


sequelize.sync();

module.exports = User;