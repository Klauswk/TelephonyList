angular.module("listaTelefonica").directive("phoneMask", function () {
    return  {
        require: "ngModel",
        link: function (scope, element, attr, ctrl) {
            
            var _formatPhone = function(phone){
                phone = phone.replace(/[^0-9]+/g,"");
                //console.log(phone);
                if(phone.length > 4){
                    phone = phone.substring(0,4) + "-" + phone.substring(4,9);
                }
                return phone;
            };
            
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});