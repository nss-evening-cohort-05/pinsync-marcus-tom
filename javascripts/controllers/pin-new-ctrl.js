app.controller("PinNewCtrl", function($q, $http, $routeParams, $scope, $rootScope, $location, PinFactory, FIREBASE_CONFIG){


  $scope.addNewPin = () => {
  $scope.newPin = $rootScope.user.uid;
  $scope.newPin.boardId = $routeParams.boardId;
  console.log("board id", $scope.newPin.boardId);
  PinFactory.postNewPin($scope.newPin)
    .then((returns) => {
      console.log("route", $routeParams);
      $scope.newPin = {returns};
      // $location.url("/pin/view/");
      //Show pin view here
    }).catch((error) => {
      console.log("Add Pin Error", error);
    });
  };


});
