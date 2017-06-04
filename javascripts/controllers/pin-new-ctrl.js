app.controller("PinNewCtrl", function($q, $http, $routeParams, $scope, $rootScope, $location, PinFactory, FIREBASE_CONFIG){

  $scope.board = {};
  $scope.newPin = {};
  $scope.boardid = $routeParams.boardid;
  $scope.user = $rootScope.user.uid;


  $scope.addNewPin = () => {
  PinFactory.postNewPin($scope.newPin, $scope.boardid)
    .then((returns) => {
      $scope.newPin = {returns};
      $location.url(`/board/${$scope.user}/pin/${$scope.boardid}`);
    }).catch((error) => {
      console.log("Add Pin Error", error);
    });
  };


});
