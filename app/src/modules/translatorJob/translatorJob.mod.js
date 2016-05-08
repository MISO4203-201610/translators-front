(function (ng) {
    var mod = ng.module('translatorJobModule', ['ngCrud']);

    mod.constant('translatorJobContext', 'translatorOferts/selected');
    mod.constant('translatorOfertTranslationRequestContext', 'translatorOferts/translationRequests');
    mod.constant('translatorJobModel', {
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
        ]
    });
})(window.angular);
