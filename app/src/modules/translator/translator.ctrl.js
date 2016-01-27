(function (ng) {
    var mod = ng.module('translatorModule');

    mod.controller('translatorCtrl', ['CrudCreator', '$scope', 'translatorService', 'translatorModel', function (CrudCreator, $scope, svc, model) {
            CrudCreator.extendController(this, svc, $scope, model, 'translator', 'Translator');
            this.fetchRecords();
        }]);

    mod.controller('languagestranslatorCtrl', ['CrudCreator', '$scope', 'languageModel', 'languageService', function (CrudCreator, $scope, model, svc) {
            CrudCreator.extendAggChildCtrl(this, $scope, model, 'languages', svc);
        }]);

    mod.controller('educationtranslatorCtrl', ['CrudCreator', '$scope', 'educationModel', function (CrudCreator, $scope, model) {
            CrudCreator.extendCompChildCtrl(this, $scope, model, 'education', 'translator');
        }]);
})(window.angular);
