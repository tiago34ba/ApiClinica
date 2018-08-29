// IMPORTAÇÃO DE MODULO
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

// CONSECTA BD
//mongoose.connect('mongodb://localhost:27017/mean');
mongoose.connect('mongodb://chamadosUser:chamados2018@ds121599.mlab.com:21599/chamadosdb');

// CONFIGURA API
var api = express();
    api.use(cors());
    api.use(bodyParser.json());

// IMPORTA CONTROLLERS
var ControllerContato = require('./contatos/controller');
var ControllerUsuario = require('./usuarios/controller');
var ControllerChamado = require('./chamados/controller');
var ControllerAgenda = require('./agendas/controller');
var ControllerCliente = require('./cliente/controller');
var ControllerEstoque = require('./estoque/controller');
var ControllerFinaceiro = require('./finaceiro/controller')


// CRIA ROTAS
// Rotas autenicação
api.post("/cadastrar-se", ControllerUsuario.cadastrarSe);
api.post("/autenticar", ControllerUsuario.autenticar);

//Qualquer rota abaixo da instrução abaixo não funcionará sem autenticação, por causa da linha abaixo
api.use(ControllerUsuario.chackLogado);

// Contatos
api.post("/contato", ControllerContato.cadastrarContato);
api.get("/contato", ControllerContato.listarContatos);
api.get("/contato/:id", ControllerContato.listarContatoPorId);
api.put("/contato/:id", ControllerContato.atualizarContato);
api.delete("/contato/:id", ControllerContato.removerContato);

// Usuários
api.post("/usuarios", ControllerUsuario.cadastrarUsuario);
api.get("/usuarios", ControllerUsuario.listarUsuarios);
api.get("/usuarios/:id", ControllerUsuario.listarUsuarioPorId);
api.put("/usuarios/:id", ControllerUsuario.atualizarUsuario);
api.delete("/usuarios/:id", ControllerUsuario.removerUsuario);




//Chamados
api.post("/chamados", ControllerChamado.cadastrarChamado);
api.get("/chamados", ControllerChamado.listarChamados);
api.get("/chamados/:id", ControllerChamado.listarChamadoPorId);
api.get("/chamadosUsuario/:requerente", ControllerChamado.listaPorUsuario);
api.put("/chamados/:id", ControllerChamado.atualizarChamado);
api.delete("/chamados/:id", ControllerChamado.removerChamado);


//Clientes
api.post("/cliente", ControllerCliente.cadastrarCliente);
api.get("/cliente", ControllerCliente.listarCliente);
api.get("/cliente/:id", ControllerCliente.listarClientePorId);
//api.get("/clienteUsuario/:requerente", Controllercliente.listaPorUsuario);
api.put("/cliente/:id", ControllerCliente.atualizarCliente);
api.delete("/cliente/:id", ControllerCliente.removerCliente);


//Estoque
api.post("/estoque", ControllerEstoque.cadastrarEstoque);
api.get("/estoque", ControllerEstoque.listarEstoque);
api.get("/estoque/:id", ControllerEstoque.listarEstoqueId);
//api.get("/estoqueUsuario/:requerente", Controllerestoque.listaPorestoque);
api.put("/estoque/:id", ControllerEstoque.atualizaEstoque);
api.delete("/estoque/:id", ControllerEstoque.removerEstoque);




//Finaceiro
api.post("/finaceiro", ControllerFinaceiro.cadastrarFinaceiro);
api.get("/finaceiro", ControllerFinaceiro.listaPorFinaceiro);
api.get("/finaceiro/:id", ControllerFinaceiro.listarFinaceiroPorId);
//api.get("/finaceiroUsuario/:requerente", Controllerfinaceiro.listaPorfinaceiro);
api.put("/finaceiro/:id", ControllerFinaceiro.atualizarFinaceiro);
api.delete("/finaceiro/:id", ControllerFinaceiro.removerFinaceiro);


// PORTA DO SERVIDOR
api.listen(3000, function(){
	console.log("Servidor rodando na porta 3000!");
});
