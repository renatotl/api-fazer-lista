const Agenda = require('../models/Agenda');

const findAllAgendasService = async () => {
  const agendas = await Agenda.find();
  return agendas;
};

const findAgendaByIdServicer = async (idParams) => {
  //o findById é uma função do mongo e traz a HASH
 // const agenda = await Agenda.findById(idParams);

 //esse code eu uso o id mesmo
 const agenda = await Agenda.findOne({id:paramId})
  return agenda;
};

const createAgendaService = async (newAgenda) => {
  const agendaCreated = await Agenda.create(newAgenda);
  return agendaCreated;
};

const deleteAgendaService = async (id) => {
// esse code verifica pelo hash
 // return await Agenda.findByIdAndDelete(id);
// verificando por id mesmo
  return await Agenda.findByIdAndDelete({id: id});
};

//return await Agenda.findOneAndUpdate({id : id});


module.exports = {

    findAgendaByIdServicer,
    createAgendaService,
    deleteAgendaService,
    findAllAgendasService

};
