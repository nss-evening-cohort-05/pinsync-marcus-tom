app.controller("PinEditCtrl", function($scope, $rootScope, $routeParams, $location, PinFactory, FIREBASE_CONFIG){


  $scope.boardid = $routeParams.boardid;
  $scope.user = $rootScope.user.uid;
  $scope.pinId = $routeParams.id;
  $scope.editPin = {};

  let getSinglePin = () => {
    PinFactory.getSinglePin($scope.pinId).then((results) => {
      console.log("edit in", results);
      $scope.editPin = results.data;
      console.log($scope.editPin);
    }).catch((error) => {
      console.log("edit pin error", error);
    });
  };

  getSinglePin();

  $scope.makeAnEditOnSinglePin = () => {
    console.log($scope.editPin);
    PinFactory.editPin($scope.editPin)
      .then((returns) => {
        $scope.newPin = {};
        $location.url(`/board/${$scope.user}/pin/${$scope.boardid}`);
      }).catch((error) => {
        console.log("Add Pin Error", error);
      });

  };




});
