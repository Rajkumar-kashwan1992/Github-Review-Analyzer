(function() {
    'use strict';
    /*jshint camelcase: false */
    angular.module('wmsApp')
        .controller('selectClientCtrl', SelectClientCtrl);
    SelectClientCtrl.$inject = ['$scope', 'selectClientService', 'genericService', '$location', 'settings', '$cookies', '$rootScope'];

    function SelectClientCtrl($scope, selectClientService, genericService, $location, settings, $cookies, $rootScope) {
        var vm = this;
                
        vm.norecord = false;
        vm.error = false;
        vm.errMsg = 'ERR3';
        vm.clientNames = [];
        $rootScope.clientDetail = '';

        vm.selectedClient = selectedClient;
        vm.launchApp = launchApp;

        ////////////////////////////////


        function selectedClient(client){        
            $cookies[settings.CP_NAME] = client.name || null;
            $cookies[settings.CP_ID] = client.id || null;
            $cookies[settings.CP_SLUG] = client.coms_client_slug || null;
            $cookies[settings.ACCESS_KEY] = client.access_key || null;
            $rootScope.clientDetail = client;

        }

        function launchApp() {
            selectClientService.getUserPermission($rootScope.clientDetail)
                .success(function() {
                    $location.path('/channels');
                })
                .error(function(data) {
                    vm.error = true;
                    if (typeof data.errors !== 'undefined') {
                        vm.errMsg = data.errors[0].error_message;
                    } else if (typeof data.message) {
                        vm.errMsg = data.message;
                    }
                });
        }
    }
})();