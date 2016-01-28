(function (ng) {
    var mod = ng.module('translationRequestModule');

    mod.service('translationRequestService', ['CrudCreator','translationRequestContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);
