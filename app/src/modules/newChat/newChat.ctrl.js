 (function (ng) {
    var mod = ng.module('newChatModule');

    mod.controller('newChatCtrl', ['Restangular', '$scope', '$stateParams','$state',
        function (Restangular, $scope, $stateParams,$state) {
            var chat = Restangular.all('translatoronline');
            var customer = $stateParams.customer;
            var contractor = $stateParams.contractor;
            var request = $stateParams.service;


            // Send Messages
            $scope.send2 = function () {
                //
                var day = $scope.fecha.getDate().toString();
                if (day.length < 2) {
                    day = '0' + day;
                }
                var month = ($scope.fecha.getMonth() + 1).toString();
                if (month.length < 2) {
                    month = '0' + month;
                }
                var year = $scope.fecha.getFullYear().toString();
                var fechaval = year + '-' + month + '-' + day;

                var newMessage = {
                    idCustomer: customer,
                    idTranslator: contractor,
                    idRequest: request,
                    dateMeet: fechaval,
                    hourMeet: $scope.hora
                };
                chat.post(newMessage).then (function () {
                    $state.go('translationRequest');
                });





            };



        }


    ]);




})(window.angular);
