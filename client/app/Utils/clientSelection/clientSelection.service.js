(function() {
    'use strict';

    angular.module('wmsApp')
        .service('selectClientService', SelectClientService);

    SelectClientService.$inject = ['$http', 'settings'];

    function SelectClientService($http, settings) {
        this.getUserPermission = getUserPermission;

        ///////////////////////

        /*Set Client and store detail in session after getting user permission*/
        function getUserPermission(params) {
            // return http promise object attempting permissions
            return $http.get(settings.API_URI.GET_USER_PERMISSION, {
                'params' : {
                    clientDetail: params
                }
            });
        }
    }
})();