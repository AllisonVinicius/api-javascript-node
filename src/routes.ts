import express = require('express');

const ImovelController = require('./controller/ImovelController');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/imovel', ImovelController.list);
routes.get('/imovel/:id', ImovelController.show);
routes.post('/imovel', ImovelController.create);
routes.put('/imovel/:id', ImovelController.update);
routes.delete('/imovel/:id', ImovelController.delete);

routes.post('/user', UserController.create);






module.exports = routes;