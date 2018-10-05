


angular.module('myApp', []).controller('productsCtrl', function($scope) {
    $scope.products = [
        {
            item:'pants',
            designer:'MK',
            price:150
        },
        {
            item:'shirt',
            designer:'CSiriano',
            price:100
        },
        {
            item:'dress',
            designer:'CSiriano',
            price:200
        },
        {
            item:'skirt',
            designer:'Versace',
            price:300
        },
        {
            item:'jacket',
            designer:'Versace',
            price:300
        },
        {
            item:'shoes',
            designer:'Nike',
            price:100
        }
    ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
}); 