(function() {

    'use strict';
    /* jshint camelcase: false */
    angular.module('wmsApp')
        .filter('nospace', function () {
            return function (value) {
                return value && typeof(value) === 'string' ? value.replace(/ /g, '') : value;
            };
        })
        .filter('nodash', function () {
            return function (value) {
                return value && typeof(value) === 'string' ? value.replace(/_|\-/g, ' ') : value;
            };
        })

        .filter('capitalize', function () {
            return function (value) {
                return value && typeof(value) === 'string' ? value[0].toUpperCase() + value.slice(1) : value;
            };
        });
})();
