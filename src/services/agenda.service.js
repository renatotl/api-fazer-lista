const Agenda = require('../models/Agenda');



const findAgendaByIdServicer = async (idParams) => {
  const agenda = await Agenda.findById(idParams);
  return agenda;
};







module.exports = {

    findAgendaByIdServicer,

};
