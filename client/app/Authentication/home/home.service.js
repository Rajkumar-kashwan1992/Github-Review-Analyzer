(function() {
    'use strict';

    angular.module('wmsApp')
        .service('homeService', HomeService);

    HomeService.$inject = [ '$http', 'settings' ];

    function HomeService($http, settings) {
        this.googleAuth = googleAuth;

        ///////////////////////

        // Handling basic authentication
        function googleAuth(locale) {
            // return http promise object attempting authentication
            return $http.post(settings.API_URI.LOGIN_GID, {
                data: {
                    locale: locale
                }
            });
        }
    }
})();
