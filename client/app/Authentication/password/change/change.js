(function(){
    'use strict';

    angular.module('wmsApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/password/change', {
                templateUrl: 'app/Authentication/password/change/change.html',
                controller: 'changePasswordCtrl',
                controllerAs: 'vm',
                title: 'CHANGE_PASSWORD_PAGE.PAGE_TITLE',
                access: {
                    requiredLogin: true,
                    requiredStation: false,
                    requiredPrecondition: true
                }
            });
    }
})();