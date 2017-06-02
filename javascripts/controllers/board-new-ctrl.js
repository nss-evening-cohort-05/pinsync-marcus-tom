app.controller("BoardNewCtrl", function($q, $http, $scope, $rootScope, $location,  BoardFactory, FIREBASE_CONFIG){


  $scope.addNewBoard = () => {
  console.log("adding new board");
  // $scope.newBoard = $rootScope.user.uid;
  console.log("scope new board", $scope.newBoard);
  BoardFactory.postNewBoard($scope.newBoard, $rootScope.user.uid)
    .then((returns) => {
      console.log("new board returns", returns);
      $scope.newBoard = {returns};
      $location.url("/board/view");
      // getMyBoards();
    }).catch((error) => {
      console.log("Add Board Error", error);
    });
  };


});
