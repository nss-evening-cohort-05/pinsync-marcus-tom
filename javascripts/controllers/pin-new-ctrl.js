app.controller("PinNewCtrl", function(){


  $scope.addNewPin = () => {
  console.log("adding new board");
  $scope.newPin = $rootScope.user.uid;
  console.log("scope new board", $scope.newPin);
  PinFactory.postNewPin($scope.newPin)
    .then((returns) => {
      console.log("new pin returns");
      //Show pin view here
    }).catch((error) => {
      console.log("Add Board Error", error);
    });
  };


});
