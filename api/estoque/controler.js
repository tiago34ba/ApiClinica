/* global listarestoqueId, docente */

var Estoque = require('./model');


var cadastrarEstoque = function (req, res) {
    var estoque = req.body; // se não houver o body-parser, não dá para pegar o json do estoque usando o '.body'

    console.log(req);
    new Estoque(estoque).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o estoque
        } else {
            res.status(201).json({
                success: true,
                message: "estoque cadastrado com sucesso.",
                data: data
            });
        }
    });
};

var listarEstoque = function (req, res) {
    Estoque.find(function (error, data) {
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

var listarEstoquePorId = function (req, res) {
    Estoque.findById(req.params.id, function (error, data) {
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

var atualizarEstoque = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var estoque = req.body;

    Estoque.findOneAndUpdate(query, estoque, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao atualizar - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "estoque atualizado com sucesso.",
                data: data
            });
        }
    });
};

var removerEstoque = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Estoque.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "estoque removido com sucesso.",
                data: data
            });
        }
    });
};


var listaPorEstoque = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    estoque.find(query, function (error, data) {
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

exports.cadastrarEstoque = cadastrarEstoque; // faz com que os outros arquivos "vejam" este
exports.listarEstoque = listarEstoque;
exports.listarEstoquePorId = listarEstoquePorId;
exports.atualizarEstoque = atualizarEstoque;
exports.removerEstoque = removerEstoque;
exports.listaPorEstoque = listaPorEstoque;
