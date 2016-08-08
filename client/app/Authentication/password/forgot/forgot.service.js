(function() {

	'use strict';

	angular.module('wmsApp')
	    .service('forgotPasswordService', ForgotPasswordService);

	ForgotPasswordService.$inject = [ '$http', 'settings' ];

	function ForgotPasswordService($http, settings) {
        this.recover = recover;

        ///////////////////

        function recover(data) {
            return $http.post(settings.API_URI.FORGOT_PASSWORD, data);
        }
    }
})();

