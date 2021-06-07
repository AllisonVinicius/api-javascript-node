
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
        const {nome,cpf,email,senha }  = req.body;
        try{
            const user = await User.create({nome,cpf,email,senha });
            return res.json(user);
        }catch (err){
            return console.log("erro na criacao usuario",err);
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


    async update(req, res) {
        try {
          const user = await User.findByPk(req.params.id);
    
          await user.update(req.body);
    
          return res.json({ user });
        } catch (err) {
          return res.status(400).json({ error: err.message });
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
   
