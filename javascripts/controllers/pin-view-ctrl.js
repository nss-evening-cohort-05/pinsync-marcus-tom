app.controller("PinViewCtrl", function($routeParams, $scope, PinFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = {};
  $scope.board = {};
  $scope.boardId = $routeParams.boardid;


  let getPins = () => {
    PinFactory.getPinList($routeParams.boardid).then((results) => {
      $scope.pin = results;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();

  $scope.deletePin = (pinId) => {
    PinFactory.deleted(pinId).then(() => {
      getPins();
    }).catch((error) => {
      console.log("delete", error);
    });
  };

  // $scope.newPinBoardId = $routeParams.boardid;


});
