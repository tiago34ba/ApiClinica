/* global listaragendaId, docente */

var Agenda = require('./model');


var cadastrarAgenda = function (req, res) {
    var agenda = req.body; // se não houver o body-parser, não dá para pegar o json do agenda usando o '.body'

    console.log(req);
    new Agenda(agenda).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o agenda
        } else {
            res.status(201).json({
                success: true,
                message: "agenda cadastrado com sucesso.",
                data: data
            });
        }
    });
};

var listarAgenda = function (req, res) {
    Agenda.find(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok - Dados localizados com sucesso.",
                data: data
            });
        }
    });
};

var listarAgendaPorId = function (req, res) {
    Agenda.findById(req.params.id, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok",
                data: data
            });
        }
    });
}

var atualizarAgenda = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var agenda = req.body;

    Agenda.findOneAndUpdate(query, agenda, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao atualizar - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "agenda atualizado com sucesso.",
                data: data
            });
        }
    });
};

var removerAgenda = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Agenda.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "agenda removido com sucesso.",
                data: data
            });
        }
    });
};


var listaPorAgenda = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    agenda.find(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao buscar- " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "sucesso.",
                data: data
            });
        }
    });
};

exports.cadastrarAgenda = cadastrarAgenda; // faz com que os outros arquivos "vejam" este
exports.listarAgenda = listarAgenda;
exports.listarAgendaPorId = listarAgendaPorId;
exports.atualizarAgenda = atualizarAgenda;
exports.removerAgenda = removerAgenda;
exports.listaPorAgenda = listaPorAgenda;
