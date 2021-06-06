
const User = require('../model/user');

module.exports = {
    async list(req, res){
        try{
            const user = await User.findAll();
            return res.json(user);
        } catch (err){
            return console.log("erro ao listar imovel");
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
    }
}