(function() {

    'use strict';

    angular.module('wmsApp')
        .service('sessionManagement', SessionManagement);
    SessionManagement.$inject = ['$http', '$cookies', '$location', 'settings', '$window', '$rootScope'];

    function SessionManagement($http, $cookies, $location, settings, $window, $rootScope) {
        var serviceObject = this;

        // get session value set in the cookie
        serviceObject.currentSessionValue = $cookies[settings.SESSION_KEY_NAME];

        serviceObject.isSessionSet = isSessionSet;
        serviceObject._setSessionValue = setSessionValue;
        serviceObject.setSessionValueInHeaders = setSessionValueInHeaders;
        serviceObject._deleteSessionValue = deleteSessionValue;
        serviceObject.verifySession = verifySession;
        serviceObject.isProfileDataSet = isProfileDataSet;
        serviceObject.getRandomSessionValue = getRandomSessionValue;
        serviceObject.reNewSession = reNewSession;
        serviceObject.forgetSession = forgetSession;

        //////////////////////////////////////

        // boolean flag to check whether session is set in the cookie
        function isSessionSet() {
            return angular.isDefined(serviceObject.currentSessionValue);
        }
        // set session value in the cookies
        function setSessionValue(value) {
            $cookies[settings.SESSION_KEY_NAME] = serviceObject.currentSessionValue = value;
            setSessionValueInHeaders();
        }

        // set session value in the headers
        function setSessionValueInHeaders() {
            // Set common headers to be injected for every xhr request
            $http.defaults.headers.common[settings.SESSION_KEY_NAME] = serviceObject.currentSessionValue;
        }

        // delete session value from the cookie
        function deleteSessionValue() {
            delete $cookies[settings.SESSION_KEY_NAME];
            delete $cookies[settings.ACCESS_KEY];
            delete $rootScope.client_name;
            delete $rootScope.client_id;
            delete $rootScope.client_slug;
            delete $cookies[settings.CP_NAME];
            delete $cookies[settings.CP_ID];
            delete $cookies[settings.CP_SLUG];
        }

        // verify saved sessionkey in the cookies
        function verifySession() {
            // return http promise object handling session verification
            return $http.head(settings.API_URI.VERIFY_SESSION);
        }

        function isProfileDataSet() {
            return $http({
                'url': settings.API_URI.USER_PROFILE,
                'method': 'GET'
            });
        }

        function getRandomSessionValue() {
            // Function to generate random id
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return (function() {
                return settings.SESSION_VALUE_PREFIX + s4() + s4() + s4() + s4() +
                    s4() + s4() + s4() + s4();
            })();
        }

        // renews session stored in the cookies
        function reNewSession() {

            // delete any old session key saved
            deleteSessionValue();
            // set newly generated session value in the cookie and in headers
            setSessionValue(serviceObject.getRandomSessionValue());
        }
        // forgets authenticated session;
        function forgetSession() {

            // return mature http promise object handling forget action
            return $http.delete(settings.API_URI.LOGOUT)
                .success(function() {
                    // renew session
                    reNewSession();

                    // delete all rootscope value
                    delete $cookies[settings.SESSION_KEY_NAME];
                    delete $cookies[settings.ACCESS_KEY];
                    delete $rootScope.client_name;
                    delete $rootScope.client_id;
                    delete $rootScope.client_slug;
                    delete $cookies[settings.CP_NAME];
                    delete $cookies[settings.CP_ID];
                    delete $cookies[settings.CP_SLUG];
                    
                    // set new rootscope
                    $rootScope = $rootScope.$new(true);
                    // redirect to location in the settings for post logout action
                    $location.path(settings.POST_LOGOUT_LOCATION);
                })
                .error(function(error) {
                    // uhhuhh.. could not logout
                    if ($location.path() === '/login-gid/callback') {
                        return false;
                    } else {
                        $window.alert(error ? error.message : 'ERR_MSG.MSG3');
                        $location.path(settings.ROUTES.SELECT_CLIENT_URL)
                            .search({
                                logoutSuccess: false
                            });
                    }
                });
        }
        // generates random id usable as session value
        // starting with the session value prefix
        // from settings
    }
})();