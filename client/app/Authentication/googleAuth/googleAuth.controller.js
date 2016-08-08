(function() {
    'use strict';
    angular.module('wmsApp')
        .controller('GoogleAuthCtrl', GoogleAuthCtrl);

    function GoogleAuthCtrl() {
        var vm = this;
        vm.isStationPage = true;
    }
})();