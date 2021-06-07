
const Login = require('../model/login');

module.exports = {
    async list(req, res){
        try{
            const login = await Login.findAll();
            return res.json(login);
        } catch (err){
            return console.log("logado Sucesso");
        }   

},

    async create(req, res){
        const {nome, cpf,email,password }  = req.body;
        try{
            const user = await User.create({nome, cpf,email,password });
            return res.json(user);
        }catch (error){
            return console.log("erro na criacao user",err);
        }
    },

    async show(req, res){
        try{
            const user = await User.findAll({where: {id: req.params.id}});
            return res.json(user);
        } catch (err){
            return console.logo("erro na pesquisa usuario", err);
        }
    },


    async update(req, res){
        const sequelize = require('sequelize');
        const up = sequelize.up;
        const {nome, cpf,email,password } = req.body;
        const id = req.body;
        
        try{
            await User.update({nome, cpf,email,password }, {where:{ id: {[up.eq]: id}}});
            return res.json({msg: `Usuario  ${nome} atualizado com sucesso..`});
            
        } catch (error) {
            return res.json({msg: `Usuario ${nome} não atualizado`}, err);            
        }


    },


    async delete( req, res){
        try{
            await User.destroy({where: {id: req.params.id}});
            return res.json({msg: `exclusao do usuario ${req.params.id} com sucesso`})

        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    }
}
   
