angular.module("listaTelefonica").controller("mainController", function ($scope,contactDAO, contactService, mobileOperatorDAO) {

    var loadContacts = function () {
        /*contactDAO.getContacts().success(function (data, status) {
            $scope.contatos = data;

        }).error(function (data, status) {
            //console.log(data);
        });*/
    };

    var loadMobileOperator = function () {
        /*mobileOperatorDAO.getOperators().success(function (data, status) {
            $scope.operadoras = data;

        }).error(function (data, status) {
            //console.log(data);
        });*/
    };

    $scope.titulo = "Bem vindo!";

    $scope.contatos = ["oi","tim"];

    $scope.operadoras = [];


    $scope.salvarContato = function (contato) {
        contactService.saveContact(contato);
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

    $scope.deletarContato = function (contatos) {
        $scope.contatos = contactService.deleteSelectedContacts(contatos);
    };

    $scope.contatoSelecionado = function (contatos) {
        return contactService.anyContactSelected(contatos);
    };

    $scope.podeAdicionarContato = function (contato) {
        return !contactService.canAddContact(contato);
    };

    $scope.ordernarPor = function (criterio) {
        $scope.criterioOrdenacao = criterio;
        $scope.flip = !$scope.flip;
    };

    loadContacts();
    loadMobileOperator();
});