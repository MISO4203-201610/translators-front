(function (ng) {
    var mod = ng.module('reviewModule', ['ngCrud']);

    mod.constant('reviewContext', 'reviews');

    mod.constant('reviewModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }, {
                name: 'source',
                displayName: 'Source',
                type: 'String',
                required: true
            }, {
                name: 'description',
                displayName: 'Description',
                type: 'String',
                required: true
            }, {
                name: 'value',
                displayName: 'Value',
                type: 'Integer',
                required: true
            }, {
                name: 'translator',
                displayName: 'Translator',
                type: 'Reference',
                url: 'translatorContext',
                options: [],
                required: true
            }]});
})(window.angular);
