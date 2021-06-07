
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


    async update(req, res) {
        try {
          const login = await Login.findByPk(req.params.id);
    
          await login.update(req.body);
    
          return res.json({ login });
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
   
