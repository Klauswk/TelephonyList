angular.module("phoneMaskModule",[]);
angular.module("phoneMaskModule").directive("phoneMask", function () {
    return  {
        require: "ngModel",
        link: function (scope, element, attr, ctrl) {
            
            var _formatPhone = function(phone){
                if(!phone){
                    return "";
                }else if(phone.length > 9){
                    if(phone.includes("-")){
                        return phone.substring(0,9);
                    }else{
                        phone = phone.substring(0,4) + "-" + phone.substring(4,9);
                        return phone;
                        
                    }
                }
                phone = phone.replace(/[^0-9]+/g,"");
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