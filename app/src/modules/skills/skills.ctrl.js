(function (ng) {
    ng.module('skillsModule', ['restangular', 'languageModule', 'ngCrud'])
            .constant('skillsContext', 'skills')
            .controller('skillsCtrl', [
                'Restangular', 'languageContext', '$scope',
                'skillsContext', 'modalService', 'languageModel', 'CrudCreator',
                function (RestAngular, ctx, $scope, skillsCtx, modalService, model, ngCrud) {
                    ngCrud.extendController({
                        name: 'skills',
                        displayName: 'Skills',
                        ctrl: this,
                        scope: $scope,
                        model: model,
                        url: skillsCtx
                    });

                    //Servicio para obtener la lista completa de registros que se pueden seleccionar
                    var allSvc = RestAngular.all(ctx);

                    var svc = RestAngular.all(skillsCtx);

                    $scope.records = svc.getList().$object;

                    var self = this;

                    this.fetchRecords = function () {
                        return svc.getList().then(function (data) {
                            $scope.records = data;
                            return data;
                        });
                    };

                    this.deleteRecord = function (rc) {
                        return rc.remove().then(this.fetchRecords);
                    };

                    this.showList = function () {
                        var modal = modalService.createSelectionModal($scope.displayName, allSvc.getList(), $scope.records);
                        modal.result.then(function () {
                            self.fetchRecords();
                        }, function () {
                            self.fetchRecords();
                        });
                    };

                    this.globalActions = [{
                            name: 'select',
                            displayName: 'Select',
                            icon: 'check',
                            fn: function () {
                                self.showList();
                            },
                            show: function () {
                                return !self.editMode && $scope.records;
                            }
                        }];

                    this.recordActions = {
                        delete: {
                            displayName: 'Delete',
                            icon: 'minus',
                            fn: function (rc) {
                                self.deleteRecord(rc);
                            },
                            show: function () {
                                return !self.readOnly;
                            }
                        }
                    };

                    this.fetchRecords();
                }]);
})(window.angular);
