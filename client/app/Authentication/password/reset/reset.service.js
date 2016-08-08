(function() {
    'use strict';

    angular.module('wmsApp')
        .service('resetPasswordService', ResetPasswordService);

    ResetPasswordService.$inject = [ '$http', 'settings' ];

    function ResetPasswordService($http, settings) {
        this.recover = recover;
        this.validateToken = validateToken;

        //////////////////////

        function recover(data) {
            return $http({
                url: settings.API_URI.RESET_PASSWORD,
                method: 'POST',
                data : data
            });
        }

        function validateToken(params) {
            return $http({
                url: settings.API_URI.VALIDATE_TOKEN,
                method: 'GET',
                params: params
            });
        }
    }
})();
