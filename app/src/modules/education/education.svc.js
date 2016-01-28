(function (ng) {
    var mod = ng.module('educationModule');

    mod.service('educationService', ['CrudCreator','educationContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);
