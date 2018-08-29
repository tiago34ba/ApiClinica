var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando a "tabela" Aluno no mongodb
var enderecoSchema = new Schema({
    logradouro: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    },
       complemento: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    cep: {
        type: String,
        require: true
    },

});
var Endereco = mongoose.model('endereco', enderecoSchema);

module.exports = Endereco;