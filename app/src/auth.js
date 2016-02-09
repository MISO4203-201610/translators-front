(function (ng) {
    var mod = ng.module('roleModule', ['ngCrud']);
    mod.controller('roleCtrl', ['$rootScope','Restangular', function ($rootScope,Restangular) {

        $rootScope.auth = function () {
            Restangular.all("users").customGET('me').then(function (response) {
                if (response == null) {
                    $rootScope.correctionRequest = false;
                    $rootScope.translationRequest = false;
                    $rootScope.profile = false;
                    $rootScope.skills = false;
                }else {
                    var roles = $rootScope.roles = response.roles;
                    if (roles.length===2){
                        $rootScope.correctionRequest = true;
                        $rootScope.translationRequest = true;
                        $rootScope.profile = true;
                        $rootScope.skills = true;
                        $rootScope.language = true;
                        $rootScope.status = true;
                    }else{
                       for (var i = 0; i < roles.length; i++) {
                        switch (roles[i]) {
                            case 'customer':
                                $rootScope.correctionRequest = true;
                                $rootScope.translationRequest = true;
                                $rootScope.profile = true;
                                $rootScope.skills = false;
                                $rootScope.language = false;
                                $rootScope.status = false;
                                break;
                            case 'translator':
                                $rootScope.profile = true;
                                $rootScope.skills = true;
                                $rootScope.correctionRequest = false;
                                $rootScope.translationRequest = false;
                                $rootScope.language = false;
                                $rootScope.status = false;
                                break;
                        }
                    } 
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




