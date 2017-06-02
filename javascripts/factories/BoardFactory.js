app.factory("BoardFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){

  let getBoardList = () => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json`)
      .then((addBoard) => {
        console.log("address list", addBoard);
          let boardCollection = addBoard.data;
          console.log(boardCollection);
          // if(addressesCollection !== null){
            Object.keys(boardCollection).forEach((key) => {
              boardCollection[key].id=key;
              boards.push(boardCollection[key]);
            });
          // }
          // console.log("resolve", boardCollection);
          resolve(boards);
        resolve(addBoard);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  let getSingleUserBoards = (userId) => {
    let boardArray = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
      .then((fbBoards) => {
        let boardCollection = fbBoards.data;
        if (boardCollection !== null) {
            Object.keys(boardCollection).forEach((key) => {
            boardCollection[key].id=key;
            boardArray.push(boardCollection[key]);
            // console.log ("BoardFactory array" , boardArray);
          });
        }
        // console.log(boardArray);
        resolve(boardArray);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewBoard = (boardTitle, boardId) => {
    console.log("in post new board");
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify({
        title: boardTitle.title,
        uid: $rootScope.user.uid
      }))
      .then((result) => {
        console.log(result);
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return{getBoardList:getBoardList, getSingleUserBoards:getSingleUserBoards, postNewBoard:postNewBoard};
});
