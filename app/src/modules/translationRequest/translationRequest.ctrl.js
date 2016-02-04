(function (ng) {
    var mod = ng.module('translationRequestModule');

    mod.controller('translationRequestCtrl', ['CrudCreator', '$scope',
        'translationRequestContext', 'translationRequestModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'translationRequest',
                displayName: 'Translation Request',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
