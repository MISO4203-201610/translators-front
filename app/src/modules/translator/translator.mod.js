(function (ng) {
    var mod = ng.module('translatorModule', ['ngCrud']);

    mod.constant('translatorContext', 'translators');

    mod.constant('translatorModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }, {
                name: 'picture',
                displayName: 'Picture',
                type: 'String',
                required: true
            }, {
                name: 'birthDate',
                displayName: 'Birth Date',
                type: 'Date',
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
            }, {
                name: 'reviews',
                displayName: 'Reviews',
                //template: '', //override generic template
                ctrl: 'TranslatorreviewsCtrl'
            }]});
})(window.angular);
