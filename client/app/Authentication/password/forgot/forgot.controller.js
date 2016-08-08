(function() {
    'use strict';
    /* jshint camelcase: false */
    angular.module('wmsApp')
        .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

    ForgotPasswordCtrl.$inject = [ '$scope', '$location', 'forgotPasswordService' ];

    function ForgotPasswordCtrl($scope, $location, forgotPasswordService) {
        var vm = this;

        vm.siteUrl = 'http://' + $location.host();
        vm.success = false;
        vm.error = false;
        vm.errMsg = 'ERR_MSG.MSG3';

        vm.recover = recover;

        activate(); // Actiavate function call        

        /////////////////////

        function activate(){
            if ($location.port() !== '') {
                vm.siteUrl = $scope.siteUrl;
            } 
        }

        function recover(data) {
            forgotPasswordService.recover({
                    'site': vm.siteUrl,
                    'locale': $scope.locale,
                    'email': data.emailId.$modelValue
                })
                .success(onSuccess)
                .error(handleError);
        }

        function handleError(data) {
            // Handling message for bad request
            vm.success = false;
            vm.error = true;
            if (data.errors) {
                vm.errMsg = data.errors[0].error_message;
            } else if (data.detail) {
                vm.errMsg = data.detail;
            } else {
                vm.errMsg = data.message || 'ERR_MSG.MSG3';
            }
        }

        function onSuccess() {
            vm.error = false;
            vm.success = true;
        }
    }
})();
