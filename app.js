/******************************************************************************************
 * Objetivo: API para manipular dados SAINT SEIYA
 * Data: 09/06/2025
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************************************************/

/*
    Para criar uma API devemos instalar:
        express         npm install express --save          - Serve para criar a API
        cors            npm install cors --save             - Serve para configurar as permissões da API
        body-parser     npm install body-parser --save      - Serve para manipular os dados do body da API
*/

const PORT = process.env.PORT || 1000; 

//Import das bibliotecas para criar uma API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Inicializando o express através do objeto app
const app = express()

app.use((request, response, next)=>{
    //Permissão de acesso para liberar quais computadores poderão acessar a API
    response.header('Access-Control-Allow-Origin', '*')
    //Permissão de acesso para liberar os verbos da requisição da API
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())//Ativando as configurações no cors

    next()
})

//Import do arquivo de funções
const dados = require('./modulo/funcoes.js')

//EndPoint para retornar as siglas dos estados
app.get('/v1/saint-seiya/characters', cors(), async function (request, response){

    //Chama a função que vai retornar a lista dos estados
    let dadosCharacters = dados.getAllCharacters()

    if(dadosCharacters){
        response.status(dadosCharacters.status_code) //Sucess
        response.json(dadosCharacters)
    }
})

//EndPoint para retornar as caracteristicas de um estado filtrando pela sigla
app.get('/v1/saint-seiya/characters/rank', cors(), async function(request, response){
    //Recebe o parametro(variavel) :sigla pela URL
    let rank = request.query.search
 
    //Chama a função que vai retornar a lista dos estados
    let dadosCharacters = dados.getCharactersRank(rank)

    if(dadosCharacters){
        response.status(dadosCharacters.status_code) //Sucess
        response.json(dadosCharacters)
    }
})

//EndPoint para retornar as caracteristicas de um estado filtrando pela sigla
app.get('/v1/saint-seiya/characters/:id', cors(), async function(request, response){
    //Recebe o parametro(variavel) :sigla pela URL
    let id = request.params.id
 
    //Chama a função que vai retornar a lista dos estados
    let dadosCharacters = dados.getCharactersById(id)

    if(dadosCharacters){
        response.status(dadosCharacters.status_code) //Sucess
        response.json(dadosCharacters)
    }
})

app.listen(PORT, function(){
    console.log('API aguardando requisições ...')
})