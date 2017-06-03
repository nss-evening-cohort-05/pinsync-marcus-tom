app.controller("BoardNewCtrl", function($q, $http, $scope, $rootScope, $location,  BoardFactory, FIREBASE_CONFIG){


  $scope.addNewBoard = () => {
  BoardFactory.postNewBoard($scope.newBoard, $rootScope.user.uid)
    .then((returns) => {
      $scope.newBoard = {returns};
      $location.url("/board/view");
      // getMyBoards();
    }).catch((error) => {
      console.log("Add Board Error", error);
    });
  };


});
