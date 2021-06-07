const Sequelize = require('sequelize');
const sequelize = require('../database');
const bcrypt = require("bcrypt");


const schema = 'user';

class User extends Sequelize.Model {}
User.init({
    nome: Sequelize.STRING,
    cpf: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,

    },{
     
        hooks: {
            beforeCreate: (user) => {
              
              user.senha = bcrypt.hashSync(user.senha, bcrypt.genSaltSync(8));
            }
          },
          instanceMethods: {
            validPassword: function(senha) {
              return bcrypt.compareSync(senha, this.senha);
            }
          },sequelize, modelName: 'user', schema});


sequelize.sync();

module.exports = User;