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
                displayName: 'Translation Requests',
                //template: '', //override generic template
                ctrl: 'CustomertranslationRequestsCtrl',
                owned: false
            }, {
                name: 'correctionRequests',
                displayName: 'Correction Requests',
                //template: '', //override generic template
                ctrl: 'CustomercorrectionRequestsCtrl',
                owned: false
            }        ]});
})(window.angular);
