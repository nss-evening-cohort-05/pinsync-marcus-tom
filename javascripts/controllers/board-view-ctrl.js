app.controller("BoardViewCtrl", function($scope, BoardFactory, FIREBASE_CONFIG){
  console.log("BoardViewCtrl");

  $scope.board = [];


  let getBoards = () => {
    BoardFactory.boardList().then((boards) => {
      console.log("board factory", boards);
      $scope.board = boards;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getBoards();


});
