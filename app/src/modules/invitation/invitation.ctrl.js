(function (ng) {
    var mod = ng.module('invitationModule');

    mod.controller('invitationCtrl', ['CrudCreator', '$scope',
        'invitationContext', 'invitationModel',
        function (ngCrud, $scope, url, model) {
            ngCrud.extendController({
                name: 'invitation',
                displayName: 'Invitation',
                ctrl: this,
                scope: $scope,
                model: model,
                url: url
            });
            this.loadRefOptions();
            this.fetchRecords();
        }]);
})(window.angular);
