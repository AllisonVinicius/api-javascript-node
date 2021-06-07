
const Login = require('../model/login');

module.exports = {
    async list(req, res){
        try{
            const login = await Login.findAll();
            return res.json(login);
        } catch (err){
            return console.log("nao logado");
        }   

},

    async create(req, res){
        const {email,senha } = req.body;
        try{
            const login = await Login.create({email,senha });
            return res.json(login);
        }catch (err){
            return console.log("erro na criacao login ;/",err);
        }
    },

    async show(req, res){
        try{
            const login = await Login.findAll({where: {id: req.params.id}});
            return res.json(login);
        } catch (err){
            return console.logo("erro na pesquisa usuario", err);
        }
    },


    async update(req, res){
        const sequelize = require('sequelize');
        const up = sequelize.up;
        const {email,senha } = req.body;
        const id = req.body;
        
        try{
            await Login.update({email,senha }, {where:{ id: {[up.eq]: id}}});
            return res.json({msg: `Email ${email} atualizado com sucesso..`});
            
        } catch (error) {
            return res.json({msg: `email ${email} não atualizado`}, err);            
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
   
