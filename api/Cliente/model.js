var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando a "tabela" Aluno no mongodb
var clienteSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    nascimento: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    
    });
var Cliente = mongoose.model('cliente', clienteSchema);

module.exports = Cliente;