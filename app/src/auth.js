(function (ng) {
    var mod = ng.module('roleModule', ['ngCrud']);
    mod.controller('roleCtrl', ['$rootScope','Restangular', function ($rootScope,Restangular) {

        $rootScope.auth = function () {
            Restangular.all("users").customGET('me').then(function (response) {
                if (response == null) {
                    $rootScope.correctionRequest = false;
                    $rootScope.translationRequest = false;
                    $rootScope.translatorOfert = false;
                    $rootScope.profile = false;
                    $rootScope.skills = false;
                    $rootScope.language = false;
                    $rootScope.knowledgeArea = false;
                    $rootScope.status = false;
                    $rootScope.customer = false;
                    $rootScope.translator = false;
                    $rootScope.reviews = false;
                    $rootScope.translatorJob = false;
                }else {
                    var roles = $rootScope.roles = response.roles;
                    if (roles.indexOf("customer") !== -1) {
                        $rootScope.correctionRequest = true;
                        $rootScope.translationRequest = true;
                        $rootScope.translatorOfert = false;
                        $rootScope.profile = true;
                        $rootScope.skills = false;
                        $rootScope.language = false;
                        $rootScope.knowledgeArea = false;
                        $rootScope.status = false;
                        $rootScope.customer = true;
                        $rootScope.translator = false;
                        $rootScope.reviews = true;
                        $rootScope.invitation = false;
                        $rootScope.translatorJob = false;
                    }
                    if (roles.indexOf("translator") !== -1) {
                        $rootScope.profile = true;
                        $rootScope.skills = true;
                        $rootScope.correctionRequest = false;
                        $rootScope.translationRequest = false;
                        $rootScope.translatorOfert = true;
                        $rootScope.language = false;
                        $rootScope.knowledgeArea = false;
                        $rootScope.status = false;
                        $rootScope.customer = false;
                        $rootScope.translator = true;
                        $rootScope.reviews = false;
                        $rootScope.invitation = true;
                        $rootScope.translatorJob = true;

                    }
                    if (roles.indexOf("admin") !== -1) {
                        $rootScope.correctionRequest = true;
                        $rootScope.translationRequest = true;
                        $rootScope.translatorOfert = true;
                        $rootScope.profile = true;
                        $rootScope.skills = false;
                        $rootScope.language = true;
                        $rootScope.invitation = true;
                        $rootScope.knowledgeArea = true;
                        $rootScope.status = true;
                        $rootScope.customer = true;
                        $rootScope.translator = true;
                        $rootScope.reviews = true;
                        $rootScope.translatorJob = false;
                    }
                }


            });
        };
        $rootScope.auth();
        $rootScope.$on('logged-in', function () {

            $rootScope.auth();
        });

        $rootScope.$on('logged-out', function () {

            $rootScope.auth();
        });

    }]);
})(window.angular);




