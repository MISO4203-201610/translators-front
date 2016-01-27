(function (ng) {
    var mod = ng.module('correctionRequestModule');

    mod.controller('correctionRequestCtrl', ['CrudCreator', '$scope', 'correctionRequestService', 'correctionRequestModel', function (CrudCreator, $scope, svc, model) {
            CrudCreator.extendController(this, svc, $scope, model, 'correctionRequest', 'CorrectionRequest');
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
