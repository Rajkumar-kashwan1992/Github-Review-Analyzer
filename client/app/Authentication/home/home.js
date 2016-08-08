(function() {
    'use strict';

    angular.module('wmsApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/Authentication/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                title: 'HOME_PAGE.PAGE_TITLE',
                access: {
                    requiredLogin: false,
                    requiredStation: false
                }
            });
    }
})();