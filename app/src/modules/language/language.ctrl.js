(function (ng) {
    var mod = ng.module('languageModule');

    mod.controller('languageCtrl', ['CrudCreator', '$scope', 'languageService', 'languageModel', function (CrudCreator, $scope, svc, model) {
            CrudCreator.extendController(this, svc, $scope, model, 'language', 'Language');
            this.fetchRecords();
        }]);
})(window.angular);
