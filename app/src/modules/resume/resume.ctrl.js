(function (ng) {
    var mod = ng.module('resumeModule');
    mod.controller('resumeCtrl', ['Restangular', '$scope',
        function (Restangular, $scope) {
            var translator = Restangular.one("translators");
            var idTrans;
            var allTrans;
            var servi;
            $scope.myVar = 1;
            $scope.mensaje = "";

            translator.get().then(function (results) {

                idTrans = results[0].id;
                servi = Restangular.one("translators", idTrans);
                servi.get().then(function (resul) {
                    allTrans = resul;
                    $scope.profile = resul.resumes[0].professionalProfile;
                    $scope.achivements = resul.resumes[0].achievements;
                    $scope.achivement = getArray($scope.achivements);
                    $scope.personals = resul.resumes[0].personalInformation;
                    $scope.personal = getArray($scope.personals);
                });
            });



            $scope.saveTrans = function (uno, dos, tres) {
                allTrans.resumes[0].professionalProfile = uno;
                allTrans.resumes[0].achievements = dos;
                allTrans.resumes[0].personalInformation = tres;
                servi.customPUT(allTrans).then(function (resul) {
                    allTrans = resul;
                    $scope.profile = resul.resumes[0].professionalProfile;
                    $scope.achivements = resul.resumes[0].achievements;
                    $scope.achivement = getArray($scope.achivements);
                    $scope.personals = resul.resumes[0].personalInformation;
                    $scope.personal = getArray($scope.personals);
                    $scope.mensaje = "Succes Update";
                    $scope.myVar = 1;
                });



            };

            $scope.editPage = function () {
                $scope.myVar = 2;
            };

            $scope.showPage = function () {
                $scope.myVar = 1;
            };






        }


    ]);
    function getArray(str) {

        var array = str.split(',');

        return array;
    }
})(window.angular);
