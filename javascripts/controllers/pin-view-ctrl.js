app.controller("PinViewCtrl", function($scope, PinFactory, FIREBASE_CONFIG){
  // console.log("PinViewCtrl");

  $scope.pin = [];


  let getPins = () => {
    PinFactory.pinList().then((pins) => {
      console.log("pins", pins);
      $scope.pin = pins;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getPins();


});
