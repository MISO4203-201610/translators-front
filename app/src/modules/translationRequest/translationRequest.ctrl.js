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

    mod.controller('translationRequestKnowledgesCtrl', ['CrudCreator', '$scope',
'knowledgeAreaModel', 'knowledgeAreaContext', 'translationRequestContext',
        function (ngCrud, $scope, model, url, parentUrl) {
            ngCrud.extendAggChildCtrl({
                name: 'knowledges',
                displayName: 'Necesidades Especificas',
                parentUrl: parentUrl,
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
            this.loadRefOptions();
        }]);
})(window.angular);
