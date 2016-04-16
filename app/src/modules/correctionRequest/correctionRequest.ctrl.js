(function (ng) {
    var mod = ng.module('correctionRequestModule');

    mod.controller('correctionRequestCtrl', ['CrudCreator', 'Restangular', '$scope', 'correctionRequestContext', 'correctionRequestModel',
        function (ngCrud, Restangular, $scope, url, model) {

            var self = this;
            var currentRequest = 0;

            ngCrud.extendController({
                name: 'correctionRequest',
                displayName: 'Correction Request',
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

                    Restangular.all('correctionRequests/recommendations/' + rc.id).getList().then(function (accounts) {

                        model.invitedUsers = accounts;

                        console.log("Buscando cada uno... " + model.invitedUsers.length);

                        // Calculate reviews
                        for (var i = 0; i < model.invitedUsers.length; i++) {

                            console.log('Name: ' + model.invitedUsers[i].name);

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

                        console.log(model.invitedUsers);
                    });
                },
                show: function () {
                    return !this.readOnly;
                }
            };

            // Enviar email
            this.sendMail = function (id) {
                Restangular.one('correctionRequests/recommendations/' + currentRequest + '/invite/' + id).getList();
            };

        }]);
})(window.angular);
