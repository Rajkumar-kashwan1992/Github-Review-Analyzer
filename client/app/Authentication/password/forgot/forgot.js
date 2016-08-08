(function() {
    'use strict';

    angular.module('wmsApp')
        .config(config);

    config.$inject = [ '$routeProvider' ];

    function config($routeProvider) {
        $routeProvider
            .when('/password/recovery', {
                templateUrl: 'app/Authentication/password/forgot/forgot.html',
                controller: 'ForgotPasswordCtrl',
                controllerAs : 'vm',
                title: 'FORGOT_PASSWORD_PAGE.PAGE_TITLE',
                access: {
                    requiredLogin: false,
                    requiredStation: false
                }
            });
    }
})();
