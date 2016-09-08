describe('Main Test case', function () {

    var $compile, $rootScope;
    var scope = {};

    beforeEach(module('phoneMaskModule'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
    }));

    it('test the phone mask with 5 digits should come 9876-5', function () {
        scope.numero = 98765;
        var elem = angular.element('<input phone-mask type="text" ng-model="numero"/>');
        compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem.triggerHandler('keyup');
        
        expect(scope.numero).toBe("9876-5");
    });
    

    it('test undefined to be empty', function () {
        scope.numero = undefined;
        var elem = angular.element('<input phone-mask type="text" ng-model="numero"/>');
        compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem.triggerHandler('keyup');
        
        expect(scope.numero).toBe("");
    });
    
    it('test null to be empty', function () {
        scope.numero = null;
        var elem = angular.element('<input phone-mask type="text" ng-model="numero"/>');
        compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem.triggerHandler('keyup');
        
        expect(scope.numero).toBe("");
    });
    
    
    
    it('test the phone mask with 9 digits should be 9876-54321', function () {
        scope.numero = 987654321;
        var elem = angular.element('<input phone-mask type="text" ng-model="numero"/>');
        compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem.triggerHandler('keyup');
        
        expect(scope.numero).toBe("9876-54321");
    });
    
    it('test the phone mask with 10 digits should be 9876-54321', function () {
        scope.numero = 9876543210;
        var elem = angular.element('<input phone-mask type="text" ng-model="numero"/>');
        compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem.triggerHandler('keyup');
        
        expect(scope.numero).toBe("9876-54321");
    });
});