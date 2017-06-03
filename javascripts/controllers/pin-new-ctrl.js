app.controller("PinNewCtrl", function($q, $http, $routeParams, $scope, $rootScope, $location, PinFactory, FIREBASE_CONFIG){

  $scope.board = [];
  $scope.newPin = {};
  $scope.boardid = $routeParams.boardid;

  $scope.addNewPin = () => {
  // $scope.newPin = $rootScope.user.uid;
  PinFactory.postNewPin($scope.newPin, $scope.boardid)
    .then((returns) => {
      $scope.newPin = {returns};
      $location.url("/board//pin/");
    }).catch((error) => {
      console.log("Add Pin Error", error);
    });
  };


});
