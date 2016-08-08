(function() {
    'use strict';

    angular.module('wmsApp')
        .service('navBarService', NavBarService);
        
    NavBarService.$inject = ['$http', 'settings'];

    function NavBarService($http, settings) {
        this.getUserPermission = getUserPermission;

        ////////////////////////////

        /*Reset fulfillment center and store detail in session after getting user permission*/
        function getUserPermission(params) {
            // return http promise object attempting permissions
            return $http({
                'url': settings.API_URI.GET_USER_PERMISSION,
                'method': 'GET',
                'params': {
                    clientDetail: params
                }
            });
        }
    }
})();