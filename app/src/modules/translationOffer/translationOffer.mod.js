(function (ng) {
    var mod = ng.module('translationOfferModule', ['ngCrud']);

    mod.constant('translationOfferContext', 'translationOffer');

    mod.constant('translationOfferModel', {
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
                required: true
            }
        ]});
})(window.angular);
