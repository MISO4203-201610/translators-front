(function (ng) {
    ng.module('catalogModule', ['correctionRequestModule', 'translationRequestModule'])
            .controller('catalogCtrl', ['$scope', 'Restangular',
                'translationRequestModel', 'correctionRequestModel',
                'translationRequestContext', 'correctionRequestContext',
                function ($scope, restangular, translationModel, correctionModel,
                        translationReqContext, correctionReqContext) {
                    $scope.translationModel = translationModel;
                    $scope.correctionModel = correctionModel;
                    $scope.translationRecords = restangular.all(translationReqContext).getList().$object;
                    $scope.correctionRecords = restangular.all(correctionReqContext).getList().$object;
                    this.changeTab = function (tab) {
                        this.tab = tab;
                    };
                    this.changeTab('translations');
                }]);
})(window.angular);
