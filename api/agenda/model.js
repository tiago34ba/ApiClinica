var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando a "tabela" Aluno no mongodb
var agendaSchema = new Schema({
    data_agendamento: {
        type: String,
        require: true
    },
    data_conclusao {
        type: String,
        require: true
    },
    observacao: {
        type: String,
        require: true
    },
    });
var Agenda = mongoose.model('agenda', agendaSchema);

module.exports = Agenda;