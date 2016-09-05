describe('Main Test case', function () {

    beforeEach(module('listaTelefonica'));

    var $controller;
    var _serialGenerate;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    beforeEach(inject(function (serialGenerate) {
        _serialGenerate = serialGenerate;
    }));

    /*describe('sum', function () {
     it('Equals titulo', function () {
     var $scope = {};
     var controller = $controller('mainController', {$scope: $scope});
     expect($scope.titulo).toBe("Bem vindo!");
     
     expect(_serialGenerate).not.toBe(undefined);
     });
     });*/

    describe("serialGenerate", function () {

        it('To generate not be undefined', function () {
            expect(_serialGenerate.generate()).not.toBe(undefined);
        });
    });

});