import express = require('express');

const ImovelController = require('./controller/ImovelController');
const UserController = require('./controller/UserController');
const LoginController = require('./controller/LoginController');

const routes = express.Router();


//rotas do imove
routes.get('/imo', ImovelController.list);
routes.get('/imo/:id', ImovelController.show);
routes.post('/imo', ImovelController.create);
routes.put('/imo:id', ImovelController.update);
routes.delete('/imo/:id', ImovelController.delete);

//rotas users
routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users:id', UserController.update);
routes.delete('/users/:id', UserController.delete);



//rotas login

routes.get('/login', LoginController.list);
routes.get('/login/:id', LoginController.show);
routes.post('/login', LoginController.create);
routes.put('/login:id', LoginController.update);
routes.delete('/login/:id', LoginController.delete);





module.exports = routes;