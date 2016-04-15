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
                displayName: 'Creation Date',
                type: 'Date',
                required: true
            }, {
                name: 'dueDate',
                displayName: 'Due Date',
                type: 'Date',
                required: true
            }, {
                name: 'status',
                displayName: 'Status',
                type: 'Reference',
                url: 'statusContext',
                options: [],
                required: true
            }, {
                name: 'language',
                displayName: 'Language',
                type: 'Reference',
                url: 'languageContext',
                options: [],
                required: true
            }, {
                name: 'description',
                displayName: 'Description',
                type: 'String',
                required: true
            }, {
                name: 'numberOfWords',
                displayName: 'Number of Words',
                type: 'Integer',
                required: true
            }],
        childs: [{
                name: 'knowledges',
                displayName: 'Necesidades Especificas',
                //template: '', //override generic template
                ctrl: 'correctionRequestKnowledgesCtrl',
                owned: true
            }]});
})(window.angular);
