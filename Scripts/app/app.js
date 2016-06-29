(function () {
    var app = angular.module('app1', ['ngCookies','pascalprecht.translate']);

    app.config(['$translateProvider',
        function ($translateProvider) {
            $translateProvider.useUrlLoader('/api/translations');
        }]);


    angular.module('app1').controller('DemoController', [
        '$scope', '$cookies', '$translate', function($scope, $cookies, $translate) {
            $scope.setLanguage = setLanguage;

            function setLanguage(lang) {
                $cookies.__APPLICATION_LANGUAGE = lang;
                $translate.use(lang);
            }

            function init() {
                var lang = $cookies.__APPLICATION_LANGUAGE || 'en';
                setLanguage(lang);
            }

            init();
        }
    ]);
})();