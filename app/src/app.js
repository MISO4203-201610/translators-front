(function (ng) {
    var mod = ng.module('mainApp', [
        //'ngCrudMock',
        'correctionRequestModule',
        'customerModule',
        'educationModule',
        'languageModule',
        'knowledgeAreaModule',
        'statusModule',
        'translationRequestModule',
        'translatorOfertModule',
        'translatorModule',
        'invitationModule',
        'catalogModule',
        'profileModule',
        'reviewModule',
        'skillsModule',
        'resumeModule',
        'trajectoryModule',
        'newChatModule',
        'chatModule',
        'authModule',
        'ui.router',
        'ngCrud',
        'roleModule'
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
                        templateUrl: 'src/modules/correctionRequest/correctionRequest.tpl.html',
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
                    .state('knowledgeArea', {
                        url: '/knowledgeArea',
                        templateUrl: tplUrl,
                        controller: 'knowledgeAreaCtrl',
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
                        templateUrl: 'src/modules/translationRequest/translationRequest.tpl.html',
                        controller: 'translationRequestCtrl',
                        controllerAs: alias
                    })
                    .state('translatorOfert', {
                        url: '/translatorOfert',
                        templateUrl: tplUrl,
                        controller: 'translatorOfertCtrl',
                        controllerAs: alias
                    })
                    .state('translator', {
                        url: '/translator',
                        templateUrl: tplUrl,
                        controller: 'translatorCtrl',
                        controllerAs: alias
                    })
                    .state('invitation', {
                        url: '/invitation',
                        templateUrl: 'src/modules/invitation/invitation.tpl.html',
                        //templateUrl: tplUrl,
                        controller: 'invitationCtrl',
                        controllerAs: alias
                    })
                    .state('catalog', {
                        url: '/catalog',
                        templateUrl: 'src/modules/catalog/catalog.tpl.html',
                        controller: 'catalogCtrl',
                        controllerAs: 'ctrl'
                    })
                    .state('profile', {
                        url: '/profile',
                        templateUrl: 'src/modules/user/profile.tpl.html',
                        controller: 'profileCtrl',
                        controllerAs: 'ctrl'
                    })
                    .state('skills', {
                        url: '/skills',
                        templateUrl: tplUrl,
                        controller: 'skillsCtrl',
                        controllerAs: 'ctrl'
                    })
                    .state('newchat', {
                        url: '/newchat/:customer/:contractor/:service',
                        templateUrl: 'src/modules/newChat/newChat.tpl.html',
                        controller: 'newChatCtrl',
                        controllerAs: 'ctrl'
                    })
                    .state('chat', {
                        url: '/chat/:chatName',
                        templateUrl: 'src/modules/chat/chat.tpl.html',
                        controller: 'newChatCtrl',
                        controllerAs: 'ctrl'
                    })
                    .state('reviews', {
                        url: '/reviews',
                        templateUrl: tplUrl,
                        controller: 'reviewsCtrl',
                        controllerAs: 'ctrl'
                    });
        }]);

    mod.config(['authServiceProvider', function (auth) {
            auth.setValues({
                apiUrl: 'http://localhost:8080/translation-service-api/api/users/',
                successState: 'profile'
            });
            auth.setRoles({
                'customer': [{
                        id: 'correctionRequest',
                        label: 'Corrections',
                        icon: 'list-alt',
                        state: 'correctionRequest'
                    }, {
                        id: 'translationRequest',
                        label: 'Translations',
                        icon: 'list-alt',
                        state: 'translationRequest'
                    }, {
                        id: 'profile',
                        label: 'Profile',
                        icon: 'list-alt',
                        state: 'profile'
                    }],
                'translator': [{
                        id: 'profile',
                        label: 'Profile',
                        icon: 'list-alt',
                        state: 'profile'
                    }, {
                        id: 'skills',
                        label: 'Skills',
                        icon: 'list-alt',
                        state: 'skills'
                    }, {
                        id: 'translatorOfert',
                        label: 'TranslatorOfert',
                        icon: 'list-alt',
                        state: 'translatorOfert'
                    }, {
                        id: 'invitation',
                        label: 'Invitation',
                        icon: 'list-alt',
                        state: 'invitation'
                    }],
                'admin': [{
                        id: 'profile',
                        label: 'Profile',
                        icon: 'list-alt',
                        state: 'profile'
                    }, {
                        id: 'customer',
                        label: 'Customers',
                        icon: 'list-alt',
                        state: 'customer'
                    }, {
                        id: 'translator',
                        label: 'Translators',
                        icon: 'list-alt',
                        state: 'translator'
                    }, {
                        id: 'language',
                        label: 'Languages',
                        icon: 'list-alt',
                        state: 'language'
                    }, {
                        id: 'knowledgeArea',
                        label: 'Knowledge Areas',
                        icon: 'list-alt',
                        state: 'knowledgeArea'
                    }, {
                        id: 'status',
                        label: 'Status',
                        icon: 'list-alt',
                        state: 'status'
                    }, {
                        id: 'invitation',
                        label: 'Invitation',
                        icon: 'list-alt',
                        state: 'invitation'
                    }]
            });
        }]);
})(window.angular);
