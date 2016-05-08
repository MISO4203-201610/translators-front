(function (ng) {
    var mod = ng.module('translatorJobModule');

    mod.controller('translatorJobCtrl', ['CrudCreator', 'Restangular', '$scope',
        'translatorJobContext', 'translatorJobModel',
        function (ngCrud, Restangular, $scope, url, model) {

            var self = this;
            //var currentRequest = 0;
            var indexDictionary;
            ngCrud.extendController({
                name: 'translatorJob',
                displayName: 'Translation Job',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });

            self.jobMode = true;


            Restangular.all('translatorOferts/selected').getList().then(function (translationOferts) {


                indexDictionary = [];
                // Calculate reviews
                for (var i = 0; i < translationOferts.length; i++) {
                    indexDictionary[translationOferts[i].translationRequest.id] = i;
                }
                model.translationOferts = translationOferts;
            });

            //Seleccionar oferta
            this.submitTranslation = function (id, idTranslationRequest) {
                console.log("Hey1!");
                Restangular.one('translatorOferts/' + id + '/translationRequest/' + idTranslationRequest).get().then(function (translationRequest) {

                    translationRequest.enlaceArchivoResultado = model.translationOferts[indexDictionary[idTranslationRequest]].translationRequest.enlaceArchivoResultado;
                    translationRequest.put();
                });

                console.log("Hey2!");

            };
            this.fetchRecords();
            this.loadRefOptions();


        }]);
})(window.angular);
