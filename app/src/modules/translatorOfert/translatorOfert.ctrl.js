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

            this.recordActions.details = {
                displayName: 'Details',
                icon: 'star',
                fn: function (record) {
                    //Acción a realizar
                    var hola = record;
                    hola = hola.count();
                },
                show: function () {
                    return true;
                }
            };


        }]);
})(window.angular);
