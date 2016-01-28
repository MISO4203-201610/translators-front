(function (ng) {
    var mod = ng.module('languageModule');

    mod.service('languageService', ['CrudCreator','languageContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);
