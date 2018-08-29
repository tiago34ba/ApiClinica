var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando a "tabela" Aluno no mongodb
var estoqueSchema = new Schema({
    quantidade_min: {
        type: String,
        require: true
    },
    quantidade_max: {
        type: String,
        require: true
    },
    valor: {
        type: String,
        require: true
    },
    unidade: {
        type: String,
        require: true
    },
});
var Estoque = mongoose.model('estoque', estoqueSchema);

module.exports = Estoque;