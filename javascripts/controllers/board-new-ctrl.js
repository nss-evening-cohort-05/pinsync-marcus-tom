app.controller("BoardNewCtrl", function($scope, BoardFactory, FIREBASE_CONFIG){


  $scope.addNewBoard = () => {
  BoardFactory.postNewBoard($scope.newBoard)
    .then((returns) => {
      $scope.newBoard = {returns};
      getMyBoards();
    }).catch((error) => {
      console.log("Add Board Error", error);
    });
  };


});
