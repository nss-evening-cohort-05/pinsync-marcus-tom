app.controller("PinNewCtrl", function($q, $http, $routeParams, $scope, $rootScope, $location, PinFactory, FIREBASE_CONFIG){

  $scope.board = [];

  $scope.addNewPin = () => {
  $scope.newPin = $rootScope.user.uid;
  $scope.boardId = $routeParams.boardId;
  console.log("board id", $scope.boardId);
  PinFactory.postNewPin($scope.newPin)
    .then((returns) => {
      console.log("route", $routeParams);
      $scope.newPin = {returns};
      $location.url("/pin/view");
    }).catch((error) => {
      console.log("Add Pin Error", error);
    });
  };


});
