(function() {
    'use strict';
    /*jshint camelcase: false */
    angular.module('wmsApp')
        .controller('resetPasswordCtrl', ResetPasswordCtrl);

    ResetPasswordCtrl.$inject = ['$scope', '$location', 'resetPasswordService', '$routeParams', '$translate'];

    function ResetPasswordCtrl($scope, $location, resetPasswordService, $routeParams, $translate) {
        var vm = this;

        vm.siteUrl = 'http://' + $location.host();
        vm.token = $routeParams.token;
        vm.user = {};
        vm.errMsg = 'ERR_MSG.MSG3';
        vm.error = false;
        vm.success = false;
        vm.isMatch = true;
        vm.isValidToken = true;
        vm.notValidTokenMsg = 'ERR_MSG.MSG9';

        vm.recover = recover;
        vm.matchPass = matchPass;

        activate();

        //////////////////////

        function activate() {
            validateToken();
            $translate.use($routeParams.lang);

            if ($location.port() !== '') {
                vm.siteUrl = $scope.siteUrl;
            }
        }

        function matchPass() {
            if (vm.user.newpwd === vm.user.oldpwd) {
                vm.isMatch = true;
            } else {
                vm.isMatch = vm.user.newpwd ? false : true;
            }
        }

        function validateToken() {
            var params = {
                'token' : vm.token,
                'locale' : $routeParams.lang
            };
            resetPasswordService.validateToken(params)
                .success(tokenOnSuccess)
                .error(tokenErrorHandle);
        }

        function recover() {
            var post = {
                'site': vm.siteUrl,
                'locale': $routeParams.lang,
                'token': vm.token,
                'password1': vm.user.oldpwd,
                'password2': vm.user.newpwd
            };
            resetPasswordService.recover(post)
                .success(recoverOnSuccess)
                .error(handleError);
        }

        function recoverOnSuccess() {
            vm.error = false;
            vm.success = true;
        }

        function tokenOnSuccess() {
            vm.isValidToken = true;
        }

        function tokenErrorHandle(error) {
            vm.isValidToken = false;
            if (error.errors) {
                vm.notValidTokenMsg = error.errors[0].error_message;
            } else if (error.detail) {
                vm.notValidTokenMsg = error.detail;
            } else {
                vm.notValidTokenMsg = error.message || 'ERR_MSG.MSG9';
            }
        }

        function handleError(error) {
            if (error.errors) {
                vm.errMsg = error.errors[0].error_message;
            } else if (error.detail) {
                vm.errMsg = error.detail;
            } else {
                vm.errMsg = error.message ? error.message : (error.email ? error.email.toString() : 'ERR_MSG.MSG3');
            }
        }
    }
})();