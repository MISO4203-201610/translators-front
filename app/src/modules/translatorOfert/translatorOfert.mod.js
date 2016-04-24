(function (ng) {
    var mod = ng.module('translatorOfertModule', ['ngCrud']);

    mod.constant('translatorOfertContext', 'translatorOferts');
    mod.constant('translatorOfertTranslationRequestContext', 'translatorOferts/translationRequests');
    mod.constant('translatorOfertModel', {
        fields: [{
                name: 'price',
                displayName: 'Price',
                type: 'String',
                required: true
            }, {
                name: 'comment',
                displayName: 'Comment',
                type: 'String',
                required: true
            }, {
                name: 'translationRequest',
                displayName: 'Translation Request',
                type: 'Reference',
                options: [],
                required: true,
                url: 'translatorOfertTranslationRequestContext'
            }
        ]/*,childs: [{
                name: 'translationRequest',
                displayName: 'Translation Request',
                //template: '', //override generic template
                ctrl: 'translatorOfertTranslationRequestCtrl',
                owned: true
            }]*/
    });
})(window.angular);
