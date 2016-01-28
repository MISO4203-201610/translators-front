(function (ng) {
    var mod = ng.module('translatorModule', ['ngCrud']);

    mod.constant('translatorContext', 'translators');

    mod.constant('translatorModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }],
        childs: [{
                name: 'languages',
                displayName: 'Languages',
                //template: '', //override generic template
                ctrl: 'languagestranslatorCtrl',
                owned: false
            }, {
                name: 'education',
                displayName: 'Education',
                //template: '', //override generic template
                ctrl: 'educationtranslatorCtrl',
                owned: true
            }]});
})(window.angular);
