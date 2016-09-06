angular.module("listaTelefonica").factory("contactDAO",function($http,config){
    var _getContacts = function(){
        return $http.get(config.apiURL +  "/contatosData.js");
    };
    
    var _saveContact = function(contact){
        return $http.post( config.apiURL +  "/contatosData.js",contact);
    };
    
    return {
        getContacts : _getContacts,
        saveContact : _saveContact
    };
});