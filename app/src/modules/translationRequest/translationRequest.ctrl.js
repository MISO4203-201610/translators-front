(function (ng) {
    var mod = ng.module('translationRequestModule');

    mod.controller('translationRequestCtrl', ['CrudCreator', 'Restangular', '$scope',
        'translationRequestContext', 'translationRequestModel',
        function (ngCrud, Restangular, $scope, url, model) {

            var self = this;
            var currentRequest = 0;

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

            // Ajustar el toolbar
            this.globalActions.create.show = function () {
                return !self.readOnly && !self.editMode && !self.inviteMode && !self.selectOfertMode;
            };

            this.globalActions.refresh.show = function () {
                return !self.readOnly && !self.editMode && !self.inviteMode && !self.selectOfertMode;
            };

            this.globalActions.cancel.show = function () {
                return !self.readOnly && (self.editMode || self.inviteMode || self.selectOfertMode);
            };

            this.globalActions.cancel.fn = function () {
                self.inviteMode = false;
                self.selectOfertMode = false;
                self.fetchRecords();
            };

            // Agregar la acción del invited users
            this.recordActions.invite = {
                displayName: 'Invite',
                icon: 'envelope',
                fn: function (rc) {
                    self.editMode = false;
                    self.inviteMode = true;
                    self.selectOfertMode = false;

                    currentRequest = rc.id;

                    Restangular.all('translationRequests/recommendations/' + rc.id).getList().then(function (accounts) {

                        model.invitedUsers = accounts;

                        // Calculate reviews
                        for (var i = 0; i < model.invitedUsers.length; i++) {

                            // Calculate reviews
                            model.invitedUsers[i].calculatedReviews = 0;
                            var reviews = model.invitedUsers[i].reviews;
                            var total = 0;
                            var suma = 0;

                            for (var r = 0; r < reviews.length; r++) {
                                suma += reviews[r].value;
                                total++;
                            }

                            if (suma !== 0) {
                                model.invitedUsers[i].calculatedReviews = total / suma;
                            }
                        }
                    });
                },
                show: function () {
                    return !this.readOnly;
                }
            };

            //Agregar la acción de seleccionar translatorOfert
            this.recordActions.selectOfert = {
                displayName: 'Select Offer',
                icon: 'check',
                fn: function (rc) {
                    self.editMode = false;
                    self.inviteMode = false;
                    self.selectOfertMode = true;

                    currentRequest = rc.id;

                    Restangular.all('translationRequests/' + rc.id + '/translatorOfert').getList().then(function (translationOferts) {

                        model.translationOferts = translationOferts;
                    });
                },
                show: function () {
                    return !this.readOnly;
                }
            };

            // Enviar email de invitación a traductores
            this.sendMail = function (id) {
                Restangular.one('translationRequests/recommendations/' + currentRequest + '/invite/' + id).getList();
            };

            //Seleccionar oferta
            this.selectionOfert = function (id) {
                Restangular.one('translationRequests/' + currentRequest + '/translatorOfert/' + id + '/selected').getList();
                Restangular.all('translationRequests/' + currentRequest + '/translatorOfert').getList().then(function (translationOferts) {
                    model.translationOferts = translationOferts;
                });
            };

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
    /*mod.controller('translationRequestTranslatorOfertCtrl', ['CrudCreator', '$scope',
'translatorOfertModel', 'translatorOfertContext', "translationRequestContext",
        function (ngCrud, $scope, model, url, parentUrl) {
            ngCrud.extendAggChildCtrl({
                name: 'translatorOfert',
                displayName: 'Translation Ofert',
                parentUrl: parentUrl,
                listUrl: url,
                ctrl: this,
                scope: $scope,
                model: model
            });
            this.fetchRecords();
            this.loadRefOptions();
        }]);*/
})(window.angular);
