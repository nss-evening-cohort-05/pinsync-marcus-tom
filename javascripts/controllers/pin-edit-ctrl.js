app.controller("PinEditCtrl", function($scope, $routeParams, PinFactory,  FIREBASE_CONFIG){

  $scope.pinId = $routeParams.id;

  $scope.editPin = (pinId) => {
    console.log("pin id", $scope.pinId);
  };



});
