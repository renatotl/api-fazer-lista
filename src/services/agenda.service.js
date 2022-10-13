const Agenda = require('../models/Agenda');

const findAllAgendasService = async () => {
  const agendas = await Agenda.find();
  return agendas;
};

const findAgendaByIdServicer = async (idParams) => {
  //o findById é uma função do mongo e traz a HASH
 // const agenda = await Agenda.findById(idParams);

 //esse code eu uso o id mesmo
 const agenda = await Agenda.findOne({id:idParams})
  return agenda;
};

const createAgendaService = async (newAgenda) => {
  const agendaCreated = await Agenda.create(newAgenda);
  return agendaCreated;
};

const deleteAgendaService = async (idParams) => {
  return await Agenda.findOneAndDelete({id:idParams});
  
  // esse code verifica pelo hash
 // return await Agenda.findByIdAndDelete(id);
// verificando por id mesmo
//findByIdAndDelete função do mongo 
};

//return await Agenda.findOneAndUpdate({id : id});

const updateAgendaService = async (id, agenda) => {
  return await Agenda.findOneAndUpdate({id: id}, agenda,{new:true});// primeiro parâmetro é o do banco o segundo o digitado

};

module.exports = {

    findAgendaByIdServicer,
    createAgendaService,
    deleteAgendaService,
    findAllAgendasService,
    updateAgendaService

};
