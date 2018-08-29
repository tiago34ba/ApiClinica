/* global listarclienteId, docente */

var Cliente = require('./model');


var cadastrarCliente = function (req, res) {
    var cliente = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Cliente(cliente).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o cliente
        } else {
            res.status(201).json({
                success: true,
                message: "cliente cadastrado com sucesso.",
                data: data
            });
        }
    });
};

var listarCliente = function (req, res) {
    Cliente.find(function (error, data) {
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

var listarClientePorId = function (req, res) {
    Cliente.findById(req.params.id, function (error, data) {
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

var atualizarCliente = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var cliente = req.body;

    Cliente.findOneAndUpdate(query, cliente, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao atualizar - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "cliente atualizado com sucesso.",
                data: data
            });
        }
    });
};

var removerCliente = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Cliente.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "cliente removido com sucesso.",
                data: data
            });
        }
    });
};


var listaPorCliente = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    cliente.find(query, function (error, data) {
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

exports.cadastrarCliente = cadastrarCliente; // faz com que os outros arquivos "vejam" este
exports.listarCliente = listarCliente;
exports.listarClientePorId = listarClientePorId;
exports.atualizarCliente = atualizarCliente;
exports.removerCliente = removerCliente;
exports.listaPorCliente = listaPorCliente;
