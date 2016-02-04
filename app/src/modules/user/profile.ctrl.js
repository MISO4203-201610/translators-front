(function (ng) {
    var mod = ng.module('profileModule', ['restangular']);

    mod.controller('profileCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
            $scope.user = Restangular.all('profile').get('').$object;
        }]);

})(window.angular);
