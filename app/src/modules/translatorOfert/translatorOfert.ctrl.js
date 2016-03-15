(function (ng) {
    var mod = ng.module('translatorOfertModule');

    mod.controller('translatorOfertCtrl', ['CrudCreator', '$scope',
        'translatorOfertContext', 'translatorOfertModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'translatorOfert',
                displayName: 'Translator Ofert',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
