app.controller("PinViewCtrl", function($routeParams, $scope, PinFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = {};
  $scope.board = {};
  $scope.boardId = $routeParams.boardid;


  let getPins = () => {
    PinFactory.getPinList($routeParams.boardid).then((results) => {
      $scope.pin = results;
      console.log("board id", $scope.boardId);
      console.log("inside viewctrl, logging results", results);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();

  // $scope.editSinglePin = (pinId) => {
  //   console.log("clicking edit button");
  //   console.log("pin id in edit", pinId);
  //   PinFactory.getSinglePin(pinId).then((results) => {
  //     $location.url();
  //     console.log("edit in", results);
  //   }).catch((error) => {
  //     console.log("edit pin error", error);
  //   });
  // };

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
