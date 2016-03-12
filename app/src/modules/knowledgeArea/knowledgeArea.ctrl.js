(function (ng) {
    var mod = ng.module('knowledgeAreaModule');

    mod.controller('knowledgeAreaCtrl', ['CrudCreator', '$scope',
        'knowledgeAreaContext', 'knowledgeAreaModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'knowledgeArea',
                displayName: 'Knowledge Area',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.fetchRecords();
        }]);
})(window.angular);
