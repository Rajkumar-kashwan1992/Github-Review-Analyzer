(function() {
    'use strict';
    /* jshint camelcase: false */
    angular.module('wmsApp')
        .controller('navbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope', '$location', '$rootScope', '$window', '$cookies', '$route', 'sessionManagement', 'navBarService', 'settings'];

    function NavbarCtrl($scope, $location, $rootScope, $window, $cookies, $route, sessionManagement, navBarService, settings) {
        $scope.isStationPage = false;

        if (($location.path() !== settings.ROUTES.GOOGLE_OAUTH_URL) &&
            ($location.path() !== settings.ROUTES.SELECT_CLIENT_URL)) {
            $scope.isStationPage = true;
        }
        $scope.logout = function() {
            sessionManagement.forgetSession();
        };
        $scope.resetClient = function(data) {
            $cookies[settings.CP_NAME] = data.name || null;
            $cookies[settings.CP_ID] = data.id || null;
            $cookies[settings.CP_SLUG] = data.coms_client_slug || null;
            $cookies[settings.ACCESS_KEY] = data.access_key || null;
            /*Reset client name and store client detail in session*/
            navBarService.getUserPermission(data)
                .success(function(response) {
                    $rootScope.clientDetail = data;
                    $rootScope.$broadcast('clientChange', {
                        permissions: response.data
                    });
                    $route.reload();
                })
                // Bad credentials sent, ok let's inform to try again
                .error(function() {
                    $window.alert('Some error occurred. Please try again later.');
                });
        };
    }
})();