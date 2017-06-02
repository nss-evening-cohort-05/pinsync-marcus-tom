app.controller("BoardViewCtrl", function($rootScope, $location, $scope, BoardFactory, FIREBASE_CONFIG){

  $scope.board = [];

///// This grabs individual user's boards
  let getMyBoards = () => {
    BoardFactory.getSingleUserBoards($rootScope.user.uid).then((boards) => {
      // console.log("board factory", boards);
      $scope.board = boards;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getMyBoards();

  // $scope.boardNewView = () => {
  //   console.log("clicking");
  //   $location.url('#!/board/new/${board.uid}');
  // };


});
