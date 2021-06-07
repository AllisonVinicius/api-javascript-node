import express = require('express');

const ImovelController = require('./controller/ImovelController');


const routes = express.Router();


//rotas do imove
routes.post('/imo', ImovelController.create);
routes.get('/imo', ImovelController.list);
routes.gut('/imo:id', ImovelController.update);








module.exports = routes;