(function (ng) {
    var mod = ng.module('customerModule');

    mod.controller('customerCtrl', ['CrudCreator', '$scope',
        'customerContext', 'customerModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'customer',
                displayName: 'Customer',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.fetchRecords();

            this.globalActions.create = {
                show: function () {
                    return false;
                }
            };
        }]);

    mod.controller('CustomertranslationRequestsCtrl', ['CrudCreator', '$scope',
        'translationRequestModel', 'translationRequestContext', 'customerContext',
        function (ngCrud, $scope, model, url, parentUrl) {
            ngCrud.extendAggChildCtrl({
                name: 'translationRequests',
                displayName: 'Translation Requests',
                parentUrl: parentUrl,
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
            this.loadRefOptions();
        }]);

    mod.controller('CustomercorrectionRequestsCtrl', ['CrudCreator', '$scope',
        'correctionRequestModel', 'correctionRequestContext', 'customerContext',
        function (ngCrud, $scope, model, url, parentUrl) {
            ngCrud.extendAggChildCtrl({
                name: 'correctionRequests',
                displayName: 'Correction Requests',
                parentUrl: parentUrl,
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
            this.loadRefOptions();
        }]);
})(window.angular);
