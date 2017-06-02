app.controller("PinNewCtrl", function($q, $http, $scope, $rootScope, $location, PinFactory, FIREBASE_CONFIG){


  $scope.addNewPin = () => {
  console.log("adding new Pin");
  $scope.newPin = $rootScope.user.uid;
  console.log("scope new Pin", $scope.newPin);
  PinFactory.postNewPin($scope.newPin)
    .then((returns) => {
      console.log("new pin returns");
      //Show pin view here
    }).catch((error) => {
      console.log("Add Pin Error", error);
    });
  };


});
