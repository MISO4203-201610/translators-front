(function (ng) {
    var mod = ng.module('correctionRequestModule', ['ngCrud']);

    mod.constant('correctionRequestContext', 'correctionRequests');

    mod.constant('correctionRequestModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }, {
                name: 'creationDate',
                displayName: 'CreationDate',
                type: 'Date',
                required: true
            }, {
                name: 'dueDate',
                displayName: 'DueDate',
                type: 'Date',
                required: true
            }, {
                name: 'status',
                displayName: 'Status',
                type: 'String',
                required: true
            }, {
                name: 'customer',
                displayName: 'Customer',
                type: 'Reference',
                service: 'customerService',
                options: [],
                required: true
            }, {
                name: 'language',
                displayName: 'Language',
                type: 'Reference',
                service: 'languageService',
                options: [],
                required: true
            }]});
})(window.angular);
