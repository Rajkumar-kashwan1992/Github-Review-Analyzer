'use strict';

angular.module('wmsApp')
 .controller('LanguageCtrl', LanguageCtrl);

    LanguageCtrl.$inject = ['$scope', 'settings', '$translate', '$rootScope'];

    function LanguageCtrl($scope, settings, $translate, $rootScope) {
        var vm = this;

        vm.languages = settings.LANGUAGES;
        vm.languageName = settings.DEFAULT_LANGUAGE.name;
        $rootScope.locale = settings.DEFAULT_LANGUAGE.locale;
        vm.flagURL = settings.DEFAULT_LANGUAGE.flagURL;

        vm.changeLanguage = changeLanguage;

        //////////////////////////////////

        function changeLanguage(langKey, langName, flagURL) {
            vm.languageName = langName;
            vm.flagURL = flagURL;
            $rootScope.locale = langKey;
            $translate.use(langKey);
        }
    }
