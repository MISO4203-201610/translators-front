(function (ng) {
    var mod = ng.module('reviewModule');

    mod.service('reviewService', ['CrudCreator','reviewContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);

(function (ng) {
    var mod = ng.module('reviewModule');

    mod.controller('reviewsCtrl', ['CrudCreator', '$scope',
        'reviewContext', 'reviewModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'review',
                displayName: 'Review',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.fetchRecords();
            this.loadRefOptions();
        }]);
})(window.angular);
