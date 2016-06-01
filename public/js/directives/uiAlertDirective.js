angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "view/alertUI.html",
        restrict : "AE",
        scope: {
            title:"@",
            message:"=message"
        },
        transclude : true
    };
});