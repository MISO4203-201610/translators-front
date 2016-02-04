(function (ng) {
    var mod = ng.module('languageModule');

    mod.controller('languageCtrl', ['CrudCreator', '$scope',
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
