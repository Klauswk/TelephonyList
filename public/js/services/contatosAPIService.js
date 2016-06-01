angular.module("listaTelefonica").factory("contatosAPI",function($http,config){
    var _getContatos = function(){
        return $http.get(config.apiURL +  "/contatosData.js");
    };
    
    var _saveContato = function(contato){
        return $http.post( config.apiURL +  "/contatosData.js",contato);
    };
    
    return {
        getContatos : _getContatos,
        saveContato : _saveContato
    };
});