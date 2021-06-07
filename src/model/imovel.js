const Sequelize = require('sequelize');
const sequelize = require('../database');


const schema = 'imovel';

class Imovel extends Sequelize.Model {}
Imovel.init({
 
    cep: Sequelize.STRING,
    numero: Sequelize.INTEGER,
    complemento: Sequelize.TEXT,
    valorAluguel: Sequelize.FLOAT,
    qtd_Quartos: Sequelize.INTEGER,
    estado: Sequelize.BOOLEAN


 
}, {sequelize, modelName: 'imovel', schema});


sequelize.sync();

module.exports = Imovel;