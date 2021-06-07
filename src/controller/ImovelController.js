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
    
    async create(req, res){
        const {cep, numero, complemento, valorAluguel, qtd_Quartos }  = req.body;
        try{
            const imovel = await Imovel.create({cep, numero, complemento, valorAluguel, qtd_Quartos });
            return res.json(imovel);
        }catch (error){
            return console.log("erro na criacao imovel",err);
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


    async update(req, res) {
        try {
          const imovel = await Imovel.findByPk(req.params.id);
    
          await imovel.update(req.body);
    
          return res.json({ imovel });
        } catch (err) {
          return res.status(400).json({ error: err.message });
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
   