(function (ng) {
    var mod = ng.module('translatorModule');

    mod.controller('translatorCtrl', ['CrudCreator', '$scope',
        'translatorContext', 'translatorModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'translator',
                displayName: 'Translator',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.fetchRecords();
        }]);

    mod.controller('TranslatoreducationCtrl', ['CrudCreator', '$scope', 'educationModel',
        function (ngCrud, $scope, model) {
            ngCrud.extendCompChildCtrl({
                name: 'education',
                displayName: 'Education',
                parent: 'translator',
                ctrl: this,
                scope: $scope,
                model: model
            });
        }]);

    mod.controller('TranslatorlanguagesCtrl', ['CrudCreator', '$scope',
        'languageModel', 'languageContext', 'translatorContext',
        function (ngCrud, $scope, model, url, parentUrl) {
            ngCrud.extendAggChildCtrl({
                name: 'languages',
                displayName: 'Languages',
                parentUrl: parentUrl,
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
        }]);
})(window.angular);
