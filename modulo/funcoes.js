/* *********************************************************************
* Objetivo: Obter uma lista de Personagens Saint Seiya
* Data: 09/06/2025
* Autor: Marcel
* Versão: 1.0
* **********************************************************************/

const listImportDados       = require('./saint_seya.js')
const message_error_not_found = {development: 'Marcel Neves Teixeira', status: 'true', status_code: 404, message: 'Nenhum item encontrado!!!'}

//Retorna todos os personagens
const getAllCharacters = function(){

    let listDadosJSON = {};

    let status = false

    if(listImportDados.dados.data.characters.length > 0){
        listDadosJSON.development = 'Marcel Neves Teixeira'
        listDadosJSON.status = true
        listDadosJSON.status_code = 200
        listDadosJSON.length = listImportDados.dados.data.characters.length
        listDadosJSON.characters = listImportDados.dados.data.characters
        status = true
    }

    if (!status)
        return message_error_not_found
    else
        return listDadosJSON
};

//Retorna personagens pelo tipo
const getCharactersRank = function(rank){
    let arrayListCharacter    = [] 
    let typeCharacter = String(rank).toUpperCase()
    let listDadosJSON = {};
    let status = false

    listImportDados.dados.data.characters.forEach(function(item){
        if(String(item.rank.toUpperCase()) == typeCharacter){
            arrayListCharacter.push(item)
            status = true
        }
    })

    if(status){
        listDadosJSON.development = 'Marcel Neves Teixeira'
        listDadosJSON.status = true
        listDadosJSON.status_code = 200
        listDadosJSON.length = arrayListCharacter.length
        listDadosJSON.characters = arrayListCharacter
    }

    console.log(arrayListCharacter)
    if (!status)
        return message_error_not_found
    else
        return listDadosJSON
};

//Retorna personagens pelo ID
const getCharactersById = function(id){
    let arrayListCharacter    = [] 
    let listDadosJSON = {};
    let status = false

    listImportDados.dados.data.characters.forEach(function(item){
        if(String(item.id) == id){
            arrayListCharacter.push(item)
            status = true
        }
    })

    if(status){
        listDadosJSON.development = 'Marcel Neves Teixeira'
        listDadosJSON.status = true
        listDadosJSON.status_code = 200
        listDadosJSON.length = arrayListCharacter.length
        listDadosJSON.characters = arrayListCharacter
    }

    if (!status)
        return message_error_not_found
    else
        return listDadosJSON
};


module.exports = {
    getAllCharacters,
    getCharactersRank,
    getCharactersById
}