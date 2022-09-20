const mongoose = require('mongoose');

const AgendatSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

});

const Agenda = mongoose.model('agenda-M4P1', AgendatSchema);

module.exports = Agenda;
