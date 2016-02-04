(function (ng) {
    var mod = ng.module('correctionRequestModule');

    mod.controller('correctionRequestCtrl', ['CrudCreator', '$scope',
        'correctionRequestContext', 'correctionRequestModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'correctionRequest',
                displayName: 'Correction Request',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
