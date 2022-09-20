const agendasService = require('../services/agenda.service');


const findAgendaByIdController = async (req, res) => {
    const idParams = req.params.id;
    const chooseAgenda = await agendasService.findAgendaByIdServicer(
      idParams,
    );
    res.send(chooseAgenda);
  };

  module.exports = {
    findAgendaByIdController
  }
