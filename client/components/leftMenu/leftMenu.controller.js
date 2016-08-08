'use strict';

angular.module('wmsApp')
    .controller('LeftMenuCtrl', function($scope, settings, leftMenuService, $location, $route) {

        /*TO change left menu bar permissions when fc change;*/
        $scope.$on('clientChange', function(event, arg) {
            $scope.permissions = arg.permissions;
        });

        /*Making list for left menu bar on basis of permission given*/

        $scope.leftMenu = settings.LEFT_MENU;

        /*Check if Permission is given or not for a module or submodule*/

        $scope.hasPermissions = function(permissions) {
            return leftMenuService.checkForPermission(permissions, $scope.permissions);
        };

        $scope.targetPage =  function(link){
            var curPath = $location.path();
            if(curPath === link && $scope.refresh === true){
                $route.reload();
            }else {
                $location.path(link);
            }

        };
    });
