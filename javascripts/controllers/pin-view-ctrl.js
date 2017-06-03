app.controller("PinViewCtrl", function($routeParams, $scope, PinFactory, BoardFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = [];
  $scope.board = {};

  console.log("scope board", $scope.board);


  let getPins = () => {
    PinFactory.getPinList($routeParams.boardid).then((results) => {
      $scope.pin = results;
      console.log("inside viewctrl, logging results", results);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();

  $scope.getBoardId = $routeParams.boardid;
  console.log("SCopre board id", $scope.getBoardId);


});
