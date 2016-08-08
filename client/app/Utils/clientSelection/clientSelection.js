(function() {
    'use strict';

    angular.module('wmsApp')
        .config(config);
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/select/client', {
                templateUrl: 'app/Utils/clientSelection/clientSelection.html',
                controller: 'selectClientCtrl',
                controllerAs : 'vm',
                title: 'PAGE_TITLE.TITLE5',
                access: {
                    requiredLogin: true,
                    requiredPrecondition: true
                }
            });
    }
})();