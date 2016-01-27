(function (ng) {
    var mod = ng.module('customerModule');

    mod.controller('customerCtrl', ['CrudCreator', '$scope', 'customerService', 'customerModel', function (CrudCreator, $scope, svc, model) {
            CrudCreator.extendController(this, svc, $scope, model, 'customer', 'Customer');
            this.fetchRecords();
        }]);

    mod.controller('translationRequestscustomerCtrl', ['CrudCreator', '$scope', 'translationRequestModel', 'translationRequestService', function (CrudCreator, $scope, model, svc) {
            CrudCreator.extendAggChildCtrl(this, $scope, model, 'translationRequests', svc);
            this.loadRefOptions();
        }]);

    mod.controller('correctionRequestscustomerCtrl', ['CrudCreator', '$scope', 'correctionRequestModel', 'correctionRequestService', function (CrudCreator, $scope, model, svc) {
            CrudCreator.extendAggChildCtrl(this, $scope, model, 'correctionRequests', svc);
            this.loadRefOptions();
        }]);
})(window.angular);
