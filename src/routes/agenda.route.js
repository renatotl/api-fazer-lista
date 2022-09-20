const express = require('express');
const route = express.Router();
const controllerAgenda = require('../controllers/agenda.controller');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));



route.get('/one-agenda/',controllerAgenda.findAgendaByIdController);




module.exports = route;
