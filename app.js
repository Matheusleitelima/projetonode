const express = require("express");

//CONEXAO COM O BANCO DE DADOS //
const mysql =require('mysql');

const connection = mysql.createConnection({
host : 'localhost' ,
user : 'theuzin' ,
password :'123456' ,
database :'matheusdeveloper'
});


//TRATAMENTO DE ERRO DA CONEXAO
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//FIM TRATAMENTO ERRO DA CONEXAO

//FAZENDO UMA CONSULTA PARA TESTE

connection.query('SELECT * FROM usuario', function(err, rows, 
  //users é uma tabela que foi criada e inserido valores la no terminal
  fields){
  if( !err){//se a variavel for diferente de truee
console.log("Resultado:", rows);
  }else{
    console.log('Erro ao realizar a busca');
  }
  
})
//FIM DA CONSULTA TESTE

// Instanciando uma função do express e atribuindo essa função a variavél "app"
const app = express();


//Fazendo as conexões para as paginas que desejamos abrir

app.get("/cadastro", function (req, res) {
  res.sendFile(__dirname+"/src/cadastro.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname+"/src/login.html");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname+"/src/index.html");
});

app.get("/moveis", function (req, res) {
  res.send(" Departamento Móveis");
});

app.get("/eletrodomestico", function (req, res) {
  res.send(" Departamento Eletrodomésticos");
});

app.get("/tvvideo", function (req, res) {
  res.send(" Departamento Tv's e Vídeos");
});

app.get("/informatica", function (req, res) {
  res.send(" Departamento Informática");
});

app.get("/nossaslojas", function (req, res) {
  res.send(" Nossas Lojas");
});

app.get("/tenhasualoja", function (req, res) {
  res.send(" Realize seu sonho tenha sua loja");
});

app.get("/regulamentos", function (req, res) {
  res.send(" Departamento Regulamentos");
});

app.get("/acessibilidade", function (req, res) {
  res.send(" Área acessibilidade");
});

//Inicia o servidors
app.listen(8080);