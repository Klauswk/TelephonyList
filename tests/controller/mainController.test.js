describe('Main Test case', function () {

    beforeEach(module('listaTelefonica'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));



    it('Should inject', function () {
        var $scope = {};
        var controller = $controller('mainController', {$scope: $scope});

        expect(controller).not.toBe(undefined);
    });

});