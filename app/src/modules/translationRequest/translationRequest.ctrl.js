(function (ng) {
    var mod = ng.module('translationRequestModule');

    mod.controller('translationRequestCtrl', ['CrudCreator', '$scope', 'translationRequestService', 'translationRequestModel', function (CrudCreator, $scope, svc, model) {
            CrudCreator.extendController(this, svc, $scope, model, 'translationRequest', 'TranslationRequest');
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
