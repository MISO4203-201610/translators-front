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
                name: 'status',
                displayName: 'Status',
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
        ]
    });
})(window.angular);
