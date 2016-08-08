(function() {
    'use strict';

    angular.module('wmsApp')
        .service('loginService', LoginService);

    LoginService.$inject = [ '$http', 'settings' ];

    function LoginService($http, settings) {
        this.login = login;

        ///////////////////

        function login(data) {
            // return http promise object attempting authentication
            return $http({
                'url': settings.API_URI.LOGIN,
                'method': 'POST',
                'data': data,
            });
        }
    }
})();
