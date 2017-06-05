app.controller("BoardEditCtrl", function($scope, $rootScope, $routeParams, $location, BoardFactory, FIREBASE_CONFIG){

  $scope.boardid = $routeParams.boardid;
  $scope.user = $rootScope.user.uid;
  $scope.editBoard = {};


  let getUserSingleBoard = () => {
    BoardFactory.getSingleUserBoards($scope.user).then((results) => {
      console.log("edit results", results);
      $scope.editBoard = results[0];
    }).catch((error) => {
      console.log("edit board error", error);
    });
  };

  getUserSingleBoard();

  $scope.makeAnEditOnSingleBoard = () => {
    console.log("editBoard scope", $scope.editBoard);
    BoardFactory.editBoard($scope.editBoard).then((returns) => {
      $scope.board = {};
      $location.url(`/board/view`);
    }).catch((error) => {
      console.log("error in edit button", error);
    });
  };





});
