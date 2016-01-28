(function (ng) {
    var mod = ng.module('customerModule');

    mod.service('customerService', ['CrudCreator','customerContext', function (CrudCreator, context) {
        CrudCreator.extendService(this, context);
    }]);
})(window.angular);
