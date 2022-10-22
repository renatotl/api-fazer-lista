const express = require('express');
const route = express.Router();
const controllerAgenda = require('../controllers/agenda.controller');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));


route.get('/all-agendas',controllerAgenda.findAllAgendasController)
route.get('/one-agenda/:id',controllerAgenda.findAgendaByIdController);
route.post('/create-agenda',controllerAgenda.createAgendaController);
route.delete('/delete-agendas/:id',controllerAgenda.deleteAgendaController);
route.put('/update-agendas/:id',controllerAgenda.updateAgendaController);


module.exports = route;


// comentário
