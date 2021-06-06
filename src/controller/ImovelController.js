
const Imovel = require('../model/imovel');

module.exports = {
    async list(req, res){
        try{
            const imovel = await Imovel.findAll();
            return res.json(imovel);
        } catch (err){
            return console.log("erro ao listar imovel");
        }   

},

    async show(req, res){
        try{
            const imovel = await Imovel.findAll({where: {id: req.params.id}});
            return res.json(imovel);
        } catch (err){
            return console.logo("erro na pesquisa imovel", err);
        }
    },
    async create(req, res){
        const {cep, numero, complemento, valorAluguel, qtd_Quartos }  = req.body;
        try{
            const imovel = await Imovel.create({cep, numero, complemento, valorAluguel, qtd_Quartos });
            return res.json(imovel);
        }catch (error){
            return console.log("erro na criacao imovel",err);
        }
    },


    async update(req, res){
        const sequelize = require('sequelize');
        const up = sequelize.up;
        const {cep, numero, complemento, valorAluguel, qtd_Quartos} = req.body;
        const id = req.body;
        
        try{
            await Imovel.update({cep, numero, complemento, valorAluguel, qtd_Quartos}, {where:{ id: {[up.eq]: id}}});
            return res.json({msg: `Imovel ${numero} atualizado com sucesso..`});
            
        } catch (error) {
            return res.json({msg: `Imovel${nunero} não atualizado`}, err);            
        }


    },


    async delete( req, res){
        try{
            await Imovel.destroy({where: {id: req.params.id}});
            return res.json({msg: `exclusao do imovel ${req.params.id} com sucesso`})

        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    }
}
    
