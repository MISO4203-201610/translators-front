(function (ng) {
    var mod = ng.module('translationRequestModule', ['ngCrud']);

    mod.constant('translationRequestContext', 'translationRequests');

    mod.constant('translationRequestModel', {
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
                name: 'targetLanguage',
                displayName: 'TargetLanguage',
                type: 'Reference',
                service: 'languageService',
                options: [],
                required: true
            }, {
                name: 'customer',
                displayName: 'Customer',
                type: 'Reference',
                service: 'customerService',
                options: [],
                required: true
            }, {
                name: 'originalLanguage',
                displayName: 'OriginalLanguage',
                type: 'Reference',
                service: 'languageService',
                options: [],
                required: true
            }]});
})(window.angular);
