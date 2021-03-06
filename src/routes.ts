import express = require('express');

const ImovelController = require('./app/controller/ImovelController');
const UserController = require('./app/controller/UserController');
const LoginController = require('./app/controller/LoginController');

const routes = express.Router();


//rotas do imove
routes.get('/imovel', ImovelController.list);
routes.get('/imovel/:id', ImovelController.show);
routes.post('/imovel', ImovelController.create);
routes.put('/imovel/:id', ImovelController.update);
routes.delete('/imovel/:id', ImovelController.delete);

//rotas users
routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);



//rotas login

routes.get('/login', LoginController.list);
routes.get('/login/:id', LoginController.show);
routes.post('/login', LoginController.create);
routes.put('/login/:id', LoginController.update);
routes.delete('/login/:id', LoginController.delete);





module.exports = routes;