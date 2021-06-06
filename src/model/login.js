const Sequelize = require('sequelize');
const sequelize = require('../database');


const schema = 'login';

class Login extends Sequelize.Model {}
Login.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING

}, {sequelize, modelName: 'login', schema});


sequelize.sync();

module.exports = Login;