const Agenda = require('../models/Agenda');

const findAllAgendasService = async () => {
  const agendas = await Agenda.find();
  return agendas;
};

const findAgendaByIdServicer = async (idParams) => {
  const agenda = await Agenda.findById(idParams);
  return agenda;
};

const createAgendaService = async (newAgenda) => {
  const agendaCreated = await Agenda.create(newAgenda);
  return agendaCreated;
};

const deleteAgendaService = async (id) => {
  return await Agenda.findByIdAndDelete(id);
};




module.exports = {

    findAgendaByIdServicer,
    createAgendaService,
    deleteAgendaService,
    findAllAgendasService

};
