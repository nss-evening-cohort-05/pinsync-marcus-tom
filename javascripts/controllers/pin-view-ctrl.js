app.controller("PinViewCtrl", function($routeParams, $scope, PinFactory, BoardFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = [];


  let getPins = () => {
    PinFactory.getPinList($routeParams.boardid).then((results) => {
      $scope.pin = results;
      console.log("inside viewctrl, logging results", results);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();


});
