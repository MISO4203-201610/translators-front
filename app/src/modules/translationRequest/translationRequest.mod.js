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
            },{
                name: 'description',
                displayName: 'Description',
                type: 'String',
                options: [],
                required: false
            },{
                name: 'contexto',
                displayName: 'Contexto',
                type: 'String',
                options: [],
                required: false
            }, {
                name: 'numberOfWords',
                displayName: 'Number of Words',
                type: 'Integer',
                required: true
            }
        ],
        childs: [{
                name: 'knowledges',
                displayName: 'Necesidades Especificas',
                //template: '', //override generic template
                ctrl: 'translationRequestKnowledgesCtrl',
                owned: false
            }]});
})(window.angular);
