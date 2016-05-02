(function (ng) {
    var mod = ng.module('trajectoryModule', ['ngCrud']);

    mod.constant('trajectoryContext', 'trajectories');

    mod.constant('trajectoryModel', {
        fields: [{
                name: 'projectName',
                displayName: 'Project',
                type: 'String',
                required: true
            }, {
                name: 'description',
                displayName: 'Description',
                type: 'String',
                required: true
            }, {
                name: 'duration',
                displayName: 'Duration',
                type: 'String',
                required: true
            }, {
                name: 'company',
                displayName: 'Company',
                type: 'String',
                required: true
            }
        ]});



})(window.angular);
