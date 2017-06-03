app.controller("BoardViewCtrl", function($rootScope, $routeParams, $location, $scope, BoardFactory, FIREBASE_CONFIG){

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

  $scope.deleteBoard = (id) => {
    id = $rootScope.user.uid;
    console.log("delete", id);
    BoardFactory.deleted(id).then(() => {
      getMyBoards();
    }).catch((error) => {
      console.log("delete", error);
    });
  };

  // $scope.boardNewView = () => {
  //   console.log("clicking");
  //   $location.url('#!/board/new/${board.uid}');
  // };


});
