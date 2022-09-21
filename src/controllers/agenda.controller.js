const agendasService = require('../services/agenda.service');


const createAgendaController = async (req, res) => {
  const agenda = req.body;
  const newAgenda = await charactersService.createAgendaService(
    agenda
  );
  res.status(201).send(newAgenda);
};


const findAgendaByIdController = async (req, res) => {
    const idParams = req.params.id;
    const chooseAgenda = await agendasService.findAgendaByIdServicer(
      idParams,
    );
    res.send(chooseAgenda);
  };


  const deleteAgendaController = async (req, res) => {
    const idParam = req.params.id;
    await agendasService.deleteAgendaService(idParam);
    res.send({ message: 'Agenda was destroyed!' });
  };

  module.exports = {

    findAgendaByIdController,
    createAgendaController,
    deleteAgendaController
  }
