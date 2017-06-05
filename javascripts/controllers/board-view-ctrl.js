app.controller("BoardViewCtrl", function($rootScope, $scope, BoardFactory, FIREBASE_CONFIG){

  $scope.board = {};

///// This grabs individual user's boards
  let getMyBoards = () => {
    BoardFactory.getSingleUserBoards($rootScope.user.uid).then((boards) => {
      $scope.board = boards;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getMyBoards();

  $scope.deleteBoard = (boardId) => {
    BoardFactory.deleted(boardId).then(() => {
      getMyBoards();
    }).catch((error) => {
      console.log("delete", error);
    });
  };


});
