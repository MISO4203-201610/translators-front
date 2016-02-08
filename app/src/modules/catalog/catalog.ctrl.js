(function (ng) {
    ng.module('catalogModule', ['correctionRequestModule', 'translationRequestModule'])
            .controller('catalogCtrl', ['$scope', 'Restangular',
                'translationRequestModel', 'correctionRequestModel',
                'translationRequestContext', 'correctionRequestContext',
                function ($scope, restangular, translationModel, correctionModel,
                        translationReqContext, correctionReqContext) {
                    $scope.translationModel = translationModel;
                    $scope.correctionModel = correctionModel;
                    this.changeTab = function (tab) {
                        this.tab = tab;
                        if (tab === 'translation') {
                            $scope.translationRecords = restangular.all("catalog/translations").getList().$object;
                        }
                        if (tab === 'correction') {
                            $scope.correctionRecords = restangular.all("catalog/corrections").getList().$object;
                        }
                    };
                    this.changeTab('translations');
                    //Paginación
                    this.maxSize = 5;
                    this.itemsPerPage = 10;
                    this.totalItems = 0;
                    this.currentPage = 1;
                    this.numPages = 0;
                }]);
})(window.angular);
