(function (ng) {
    var mod = ng.module('mainApp', [
        //'ngCrudMock',
        'correctionRequestModule',
        'customerModule',
        'educationModule',
        'languageModule',
        'statusModule',
        'translationRequestModule',
        'translatorModule',
        'authModule',
        'ui.router',
        'ngCrud'
    ]);

    mod.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    mod.config(['RestangularProvider', function (rp) {
            rp.setBaseUrl('http://localhost:8080/translation-service-api/api/');
        }]);

    mod.config(['$stateProvider', '$urlRouterProvider', 'CrudTemplateURL', 'CrudCtrlAlias', function ($stateProvider, $urlRouterProvider, tplUrl, alias) {
            $stateProvider
                .state('correctionRequest', {
                    url: '/correctionRequest',
                    templateUrl: tplUrl,
                    controller: 'correctionRequestCtrl',
                    controllerAs: alias
                })
                .state('customer', {
                    url: '/customer',
                    templateUrl: tplUrl,
                    controller: 'customerCtrl',
                    controllerAs: alias
                })
                .state('language', {
                    url: '/language',
                    templateUrl: tplUrl,
                    controller: 'languageCtrl',
                    controllerAs: alias
                })
                .state('status', {
                    url: '/status',
                    templateUrl: tplUrl,
                    controller: 'statusCtrl',
                    controllerAs: alias
                })
                .state('translationRequest', {
                    url: '/translationRequest',
                    templateUrl: tplUrl,
                    controller: 'translationRequestCtrl',
                    controllerAs: alias
                })
                .state('translator', {
                    url: '/translator',
                    templateUrl: tplUrl,
                    controller: 'translatorCtrl',
                    controllerAs: alias
                });
            $urlRouterProvider.otherwise('/');
        }]);

    mod.config(['authServiceProvider', function (auth) {
            auth.setValues({
                apiUrl: 'http://localhost:8080/translation-service-api/api/users/',
                successState: 'correctionRequest'
            });
        }]);
})(window.angular);
