const express = require('express'); //Importando a lib express para a constante
const cors = require('cors');
const routes = require('./routes') // Importa arquivo routes (endpoints).

const app = express(); // Criando a Aplicacao a partir do express.

app.use(cors());

//Informa que iremos trabalhar com o formato JSON para as requisições/respostas
app.use(express.json());

//Informa que iremos trabalhar com o arquivo routes, Similar a INSTÂNCIAR;
app.use(routes);


app.listen(3333); //definindo a porta