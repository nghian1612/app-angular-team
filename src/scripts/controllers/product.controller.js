angular.module('product.controller', []).controller("ProductController", _productController)

function _productController($scope, $http) {
    $http({
        method: 'GET', // POST, PUT, DELETE
        url: '/db/product.json',
    }).then(function(response) {
        $scope.data = eval(response.data.product);
    }, function(error) {
        console.log('Lỗi 003 - Product: ' + error);
    });

    $scope.den = function() {
        console.log(1)
    }
}