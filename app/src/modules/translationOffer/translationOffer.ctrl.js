(function (ng) {
    var mod = ng.module('translationOfferModule');

    mod.controller('translationOfferCtrl', ['CrudCreator', '$scope',
        'translationOfferContext', 'translationOfferModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'translationOffer',
                displayName: 'Translation Offer',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
