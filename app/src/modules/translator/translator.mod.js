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
                name: 'education',
                displayName: 'Education',
                //template: '', //override generic template
                ctrl: 'TranslatoreducationCtrl',
                owned: true
            }, {
                name: 'languages',
                displayName: 'Languages',
                //template: '', //override generic template
                ctrl: 'TranslatorlanguagesCtrl',
                owned: false
            }        ]});
})(window.angular);
