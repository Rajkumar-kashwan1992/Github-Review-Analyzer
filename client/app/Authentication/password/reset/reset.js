(function() {
	'use strict';

	angular.module('wmsApp')
	    .config(config);

	config.$inject = [ '$routeProvider' ];
	
	function config($routeProvider) {
	    $routeProvider
	        .when('/:lang/password/reset/:token', {
	            templateUrl: 'app/Authentication/password/reset/reset.html',
	            controller: 'resetPasswordCtrl',
	            controllerAs: 'vm',
	            title: 'RESET_PASSWORD_PAGE.PAGE_TITLE'
	        });
	}
	
})();
