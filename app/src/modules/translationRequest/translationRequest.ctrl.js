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
                return !self.readOnly && !self.editMode && !self.inviteMode;
            };

            this.globalActions.refresh.show = function () {
                return !self.readOnly && !self.editMode && !self.inviteMode;
            };

            this.globalActions.cancel.show = function () {
                return !self.readOnly && (self.editMode || self.inviteMode);
            };

            this.globalActions.cancel.fn = function () {
                self.inviteMode = false;
                self.fetchRecords();
            };

            // Agregar la acción del invited users
            this.recordActions.invite = {
                displayName: 'Invite',
                icon: 'envelope',
                fn: function (rc) {
                    self.editMode = false;
                    self.inviteMode = true;

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

            // Enviar email
            this.sendMail = function (id) {
                Restangular.one('translationRequests/recommendations/' + currentRequest + '/invite/' + id).getList();
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
})(window.angular);
