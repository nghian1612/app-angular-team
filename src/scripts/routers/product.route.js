angular.module('product.router', []).config(_productRoute)

function _productRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('shop', {
            url: '/product',
            data: {
                pageTitle: 'Sản phẩm'
            },
            views: {
                "@": {
                    controller: 'ProductController',
                    templateUrl: '/views/product.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}