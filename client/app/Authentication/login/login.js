(function() {
    'use strict';

    angular.module('wmsApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/Authentication/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                title: 'LOGIN_PAGE.PAGE_TITLE',
                access: {
                    requiredLogin: false,
                }
            });
    }
})();
