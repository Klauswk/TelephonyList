describe('Main Test case', function () {

    beforeEach(module('serialGeneratorApp'));

    var _serialGenerate;

    beforeEach(inject(function (serialGenerate) {
        _serialGenerate = serialGenerate;
    }));
    it('To generate not be undefined', function () {
        expect(_serialGenerate.generate()).not.toBe(undefined);
    });

    describe("serialGenerate", function () {

    });

});