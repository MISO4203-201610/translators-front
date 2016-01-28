(function (ng) {
    var mod = ng.module('translatorModule');

    mod.service('translatorService', ['CrudCreator','translatorContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);
