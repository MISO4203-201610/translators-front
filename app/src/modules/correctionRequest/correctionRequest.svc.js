(function(ng){
    var mod = ng.module('correctionRequestModule');

    mod.service('correctionRequestService', ['CrudCreator','correctionRequestContext', function(CrudCreator, context){
            CrudCreator.extendService(this, context);
    }]);
})(window.angular);
