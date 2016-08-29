angular.module("listaTelefonica").controller("mainController", function ($scope, contatosAPI,operadorasAPI,serialGenerate) {

    var carregarDados = function () {
        contatosAPI.getContatos().success(function (data, status) {
            $scope.contatos = data;

        }).error(function (data, status) {
            console.log(data);
        });
    };

    var carregarOperadora = function () {
        operadorasAPI.getOperadoras().success(function (data, status) {
            $scope.operadoras = data;

        }).error(function (data, status) {
            console.log(data);
        });
    };

    $scope.titulo = "Bem vindo!";

    $scope.contatos = [];

    $scope.operadoras = [];


    $scope.salvarContato = function (contato) {
        
        contato.serial = serialGenerate.generate();
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        contatosAPI.saveContato(contato);
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

    $scope.podeAdicionarContato = function (contato){
       
       if(!contato){
           return false;
       }
       return !((contato.nome) || (contato.telefone) || (contato.operadora) || (contato.telefone.length === 10));
       
    };

    $scope.ordernarPor = function (criterio) {
        $scope.criterioOrdenacao = criterio;
        $scope.flip = !$scope.flip;
    };

    carregarDados();
    carregarOperadora();
});