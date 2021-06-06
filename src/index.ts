import express from 'express';
const api = express();


const routes = require('./routes');

api.use(express.json());
api.use(routes);
api.listen(3000, () => console.log('servidor ok ...'));

