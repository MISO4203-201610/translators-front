(function (ng) {
    var mod = ng.module('languageModule', ['ngCrud']);

    mod.constant('languageContext', 'languages');

    mod.constant('languageModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }]});
})(window.angular);
