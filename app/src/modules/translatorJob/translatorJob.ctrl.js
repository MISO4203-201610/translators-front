(function (ng) {
    var mod = ng.module('translatorJobModule');

    mod.controller('translatorJobCtrl', ['CrudCreator', 'Restangular', '$scope',
        'translatorJobContext', 'translatorJobModel',
        function (ngCrud, Restangular, $scope, url, model) {

            //var self = this;
            //var currentRequest = 0;

            ngCrud.extendController({
                name: 'translatorJob',
                displayName: 'Translation Job',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });

            this.fetchRecords();
            this.loadRefOptions();


        }]);
})(window.angular);
