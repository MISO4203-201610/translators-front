(function (ng) {
    var mod = ng.module('knowledgeAreaModule', ['ngCrud']);

    mod.constant('knowledgeAreaContext', 'knowledgeAreas');

    mod.constant('knowledgeAreaModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }]});
})(window.angular);
