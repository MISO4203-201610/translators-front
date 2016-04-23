(function (ng) {
    var mod = ng.module('invitationModule', ['ngCrud']);

    mod.constant('invitationContext', 'invitations');

    mod.constant('invitationModel', {
        fields: [{
                name: 'accepted',
                displayName: 'Accept',
                type: 'Boolean',
                required: true
            }, {
                name: 'price',
                displayName: 'Price',
                type: 'String',
                required: false
            }, {
                name: 'time',
                displayName: 'Time',
                type: 'String',
                required: false
            }, {
                name: 'comment',
                displayName: 'Comment',
                type: 'String',
                required: false
            }, {
                name: 'translationRequest',
                displayName: 'Translation Request',
                type: 'Reference',
                url: 'translationRequestContext',
                options: [],
                required: false
            }
        ]});
})(window.angular);
