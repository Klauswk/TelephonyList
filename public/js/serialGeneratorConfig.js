angular.module("listaTelefonica").config(function (serialGenerateProvider){
    serialGenerateProvider.setLenght(5);
    console.log(serialGenerateProvider.getLenght());
});