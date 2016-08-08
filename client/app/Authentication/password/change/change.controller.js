(function(){
    'use strict';

    /* jshint camelcase: false */
    angular.module('wmsApp')
        .controller('changePasswordCtrl', ChangePasswordCtrl);

    ChangePasswordCtrl.$inject = [ '$scope', 'changePasswordService', 'sessionManagement', '$timeout' ];

    function ChangePasswordCtrl($scope, changePasswordService, sessionManagement, $timeout) {
        var vm = this;

        vm.success = false;
        vm.module = 'HOME_TEXT';
        vm.isSearch = false;
        vm.errMsg = 'FORGOT_PASSWORD_PAGE.H1';
        vm.userData = {};
        vm.error = false;
        vm.isMatch = true;

        vm.changePassword = changePassword;
        vm.matchPass = matchPass;

        ///////////////////

        function changePassword() {
            changePasswordService.changePassword(vm.userData)
                .success(onSuccess)
                .error(handleError);
        }

        function onSuccess() {
            vm.error = false;
            vm.success = true;
            $timeout(function(){
                sessionManagement.forgetSession();
            }, 5000);
        }

        function handleError(data) {
            vm.errMsg = (data.current_password) ? data.current_password[0] : (data.email ? data.email.toString() : 'FORGOT_PASSWORD_PAGE.ERR4');
            vm.success = false;
            vm.error = true;
        }

        function matchPass() {
            if(vm.userData.newPass === vm.userData.confirmPass){
                vm.isMatch = true;
            } else {
                vm.isMatch = vm.userData.confirmPass ? false : true;
            }
        }
    }
})();

