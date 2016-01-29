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
                displayName: 'Creation Date',
                type: 'Date',
                required: true
            }, {
                name: 'dueDate',
                displayName: 'Due Date',
                type: 'Date',
                required: true
            }, {
                name: 'customer',
                displayName: 'Customer',
                type: 'Reference',
                url: 'customerContext',
                options: [],
                required: true
            }, {
                name: 'status',
                displayName: 'Status',
                type: 'Reference',
                url: 'statusContext',
                options: [],
                required: true
            }, {
                name: 'originalLanguage',
                displayName: 'Original Language',
                type: 'Reference',
                url: 'languageContext',
                options: [],
                required: true
            }, {
                name: 'targetLanguage',
                displayName: 'Target Language',
                type: 'Reference',
                url: 'languageContext',
                options: [],
                required: true
            }]});
})(window.angular);
