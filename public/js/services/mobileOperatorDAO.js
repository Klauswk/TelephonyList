angular.module("listaTelefonica").service("mobileOperatorDAO",function($http,config){
    this.getOperators = function (){
        return $http.get(config.apiURL +  "/operadorasData.js");
    };
});