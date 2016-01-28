(function (ng) {
    var mod = ng.module('customerModule', ['ngCrud']);

    mod.constant('customerContext', 'customers');

    mod.constant('customerModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }],
        childs: [{
                name: 'translationRequests',
                displayName: 'TranslationRequests',
                //template: '', //override generic template
                ctrl: 'translationRequestscustomerCtrl',
                owned: false
            }, {
                name: 'correctionRequests',
                displayName: 'CorrectionRequests',
                //template: '', //override generic template
                ctrl: 'correctionRequestscustomerCtrl',
                owned: false
            }]});
})(window.angular);
