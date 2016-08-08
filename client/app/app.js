
(function() {

    'use strict';

    angular.module('wmsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngFileUpload',
        'ui.bootstrap',
        'pascalprecht.translate',
        'angular-loading-bar',
        'focus-if',
        'ngTagsInput',
        'daterangepicker',
        '720kb.datepicker'
    ])
    .config(config)
    .run(run);

    config.$inject = [ '$routeProvider', '$locationProvider', '$httpProvider', 'cfpLoadingBarProvider' ];

    function config($routeProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {
        $routeProvider
          .otherwise('/dashboard');

        // $locationProvider.html5Mode(true);

        // cfpLoadingBarProvider.includeSpinner = true;
        // cfpLoadingBarProvider.includeBar = true;

        // $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
        //     return {
        //         responseError: function(response) {
        //             // Check precondition is satisfy or not
        //             if (response.status === 403 && response.config.method === 'HEAD') {
        //                 $location.path('/select/client');
        //             }
        //             // login or not
        //             else if (response.status === 401 && response.config.method !== 'HEAD') {
        //                 $location.path('/login');
        //             }
        //             return $q.reject(response);
        //         }
        //     };
        // }]);
    }

    run.$inject = ['$http', '$location', 'settings', 'sessionManagement', '$rootScope', '$translate', '$cookies'];

    function run($http, $location, settings, sessionManagement, $rootScope, $translate, $cookies) {
        // $rootScope.$on('$routeChangeStart', function(event, nextRoute) {
        /*TODO to remove hash*/
        //     var loc = $location.url(),
        //       index = loc.indexOf('?');
        //     if (index > 0) {
        //         $rootScope.authParam = nextRoute.params.authParam;
        //         $rootScope.userName = nextRoute.params.userName;
        //         $location.url($location.path());
        //         return false;
        //     }
        //     /*No need to verify session after google auth callback*/
        //     if ($location.path() === '/account/google-oauth2') {
        //         return false;
        //     }
        //     // Test of routing scheme ui-router/ng-route for every route change
        //     $rootScope.route = nextRoute.$$route;
        //     if (nextRoute && nextRoute.access) {
        //         $rootScope.current_date = new Date();
        //         $rootScope.next_date = new Date($rootScope.current_date + 86400000).toString();
        //         $rootScope.client_name = $cookies[settings.CP_NAME];
        //         $rootScope.client_id = $cookies[settings.CP_ID];
        //         $rootScope.coms_client_slug = $cookies[settings.CP_SLUG];
        //         $rootScope.access_key = $cookies[settings.ACCESS_KEY];

        //         /*Test whether session key is set in cookie or not*/
        //         if (sessionManagement.isSessionSet()) {
        //             sessionManagement.setSessionValueInHeaders();
        //             sessionManagement.verifySession()
        //                 .success(verificationSuccess)
        //                 .error(verificationError);
        //         } else {
        //             // Seems no session value is saved in the cookies. OK, set one
        //             sessionManagement.reNewSession();
        //         }
        //     } else {}

        //     function verificationError(response, status) {
        //         var isRestricted = false;
        //         if (status === 401) {
        //             for (var i = 0; i < settings.NON_RESTRICTED_URLS.length; i++) {
        //                 if (settings.NON_RESTRICTED_URLS[i] === $location.path()) {
        //                     $location.path($location.url());
        //                     isRestricted = true;
        //                     break;
        //                 }
        //             }
        //             if (!isRestricted) {
        //                 $location.path('/home');
        //             }
        //         } else {
        //             sessionManagement.forgetSession();
        //         }
        //     }

        //     function verificationSuccess() {
        //         $rootScope.isLogged = true;

        //         if (nextRoute.access.requiredLogin) {
        //             var permissions = $rootScope.permissions ? $rootScope.permissions.length > 0 : $rootScope.permissions;
        //             if (nextRoute.access.requiredPrecondition && !permissions) {
        //                 sessionManagement.isProfileDataSet()
        //                     .success(setDataSuccess)
        //                     .error(setDataError);
        //             }
        //         } else {
        //             sessionManagement.forgetSession();
        //         }
        //     }

        //     function setDataError() {
        //         sessionManagement.forgetSession();
        //     }

        //     function setDataSuccess(data) {
        //         /*Set the client detail and permissions in rootScope*/
        //         $rootScope.clientDetail = data.clientDetail ? JSON.parse(data.clientDetail) : null;
        //         $rootScope.permissions = data.userPermission ? data.userPermission.split(',') : [];
        //         $rootScope.profileData = data.client ? JSON.parse(data.client).data[0] : '';
        //         $rootScope.locale = data.locale;
        //         $translate.use(data.locale);

        //         if (typeof $rootScope.profileData === 'object') {
        //             _.each(settings.ROUTES, function(rr) {
        //                 if (rr === $location.path()) {
        //                     $location.url(rr).replace();
        //                     return false;
        //                 }
        //             });
        //         } else {
        //             $location.path('/login').replace();
        //             sessionManagement.forgetSession();
        //         }
        //     }
        // });

        // $rootScope.$broadcast('loading-complete');
    }
})();
