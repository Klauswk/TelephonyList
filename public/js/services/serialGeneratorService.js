angular.module("listaTelefonica").provider("serialGenerate", function () {
    var _lenght = 10;
    
    this.getLenght = function(){
        return _lenght;
    };
    
     this.setLenght = function(lenght){
        _lenght = lenght;
    };
    
    
    
    this.$get = function () {
        return {
            generate: function () {
                var serial = "";

                while (serial.length < _lenght) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});