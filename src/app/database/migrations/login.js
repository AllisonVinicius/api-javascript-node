const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const bcrypt = require("bcrypt");

const schema = 'login';

class Login extends Sequelize.Model {}
Login.init({
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    
    },{
        hooks: {
            beforeCreate: (login) => {
              const salt = bcrypt.genSaltSync();
   
              login.senha = bcrypt.hashSync(login.senha,salt);
            }
          },
          instanceMethods: {
            validPassword: function(senha) {
              return bcrypt.compareSync(senha, this.senha);
            }
          },sequelize, modelName: 'login', schema});

    sequelize.sync();

module.exports = Login;