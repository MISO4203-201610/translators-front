(function (ng) {
    var mod = ng.module('translatorOfertModule');

    mod.controller('translatorOfertCtrl', ['CrudCreator', 'Restangular', '$scope',
        'translatorOfertContext', 'translatorOfertModel',
        function (ngCrud, Restangular, $scope, url, model) {

            //var self = this;
            //var currentRequest = 0;

            ngCrud.extendController({
                name: 'translatorOfert',
                displayName: 'Translation Offer',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });

            this.fetchRecords();
            this.loadRefOptions();


        }]);
    mod.controller('translatorOfertTranslationRequestCtrl', ['CrudCreator', '$scope',
'translationRequestModel', 'translationRequestContext', "translatorOfertContext",
        function (ngCrud, $scope, model, url) {
            ngCrud.extendAggChildCtrl({
                name: 'translationRequest',
                displayName: 'Translation Request',
                parentUrl: "",
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
            this.fetchRecords();
            this.loadRefOptions();
        }]);
})(window.angular);
