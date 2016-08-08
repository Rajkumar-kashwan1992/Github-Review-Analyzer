(function() {
    'use strict';

    angular.module('wmsApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [ '$scope', 'homeService', '$window' ];

    function HomeCtrl( $scope, homeService, $window) {
        var vm = this;
        
        vm.googleAuth = googleAuth;

        //////////////

        function googleAuth() {
            homeService.googleAuth($scope.locale)
                // Handling successful login
                .success(function(data) {
                    $window.location = data.url;
                })
                // Bad credentials sent, ok let's inform to try again
                .error(function(data) {
                    vm.isInvalid = true;
                    if (typeof data.message !== 'undefined') {
                        vm.errorMsg = data.message;
                    }
                });
        }
    }
})();
