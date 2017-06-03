app.controller("PinViewCtrl", function($routeParams, $scope, PinFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = [];
  $scope.board = {};


  let getPins = () => {
    PinFactory.getPinList($routeParams.boardid).then((results) => {
      $scope.pin = results;
      console.log("inside viewctrl, logging results", results);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();

  $scope.deletePin = (pinId) => {
    console.log("delete", pinId);
    PinFactory.deleted(pinId).then(() => {
      getPins();
    }).catch((error) => {
      console.log("delete", error);
    });
  };

  // $scope.newPinBoardId = $routeParams.boardid;


});
