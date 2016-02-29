(function (ng) {
    var mod = ng.module('reviewModule');

    mod.service('reviewService', ['CrudCreator','reviewContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);

(function (ng) {
    var mod = ng.module('reviewModule');

    mod.controller('reviewCtrl', ['CrudCreator', '$scope',
        'languageContext', 'languageModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'language',
                displayName: 'Language',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.fetchRecords();
        }]);
})(window.angular);
