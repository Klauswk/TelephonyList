angular.module("listaTelefonica").controller("mainController", function ($scope, $http) {

    var carregarDados = function () {
        $http.get("http://localhost:8383/ListaTelefonicaJS/contatosData.js").success(function (data, status) {
            $scope.contatos = data;

        }).error(function (data, status) {
            console.log(data);
        });
    };

    var carregarOperadora = function () {
        $http.get("http://localhost:8383/ListaTelefonicaJS/operadorasData.js").success(function (data, status) {
            $scope.operadoras = data;

        }).error(function (data, status) {
            console.log(data);
        });
    };

    $scope.titulo = "Bem vindo!";

    $scope.contatos = [];

    $scope.operadoras = [];


    $scope.salvarContato = function (contato) {
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

    $scope.deletarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };

    $scope.contatoSelecionado = function (contatos) {
        return !contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordernarPor = function (criterio) {
        $scope.criterioOrdenacao = criterio;
        $scope.flip = !$scope.flip;
    };

    carregarDados();
    carregarOperadora();
});