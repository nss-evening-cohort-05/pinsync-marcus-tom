app.factory("BoardFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){

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
          });
        }
        resolve(boardArray);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewBoard = (boardTitle, boardId) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify({
        title: boardTitle.title,
        uid: $rootScope.user.uid
      }))
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let editBoard = (board) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${board.id}.json`, JSON.stringify({
        title: board.title,
        uid: $rootScope.user.uid
      }))
      .then((result) => {
        result.data.id = board;
        resolve(board);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let deleted = (id) => {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${id}.json`)
      .then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return{getSingleUserBoards:getSingleUserBoards, postNewBoard:postNewBoard, editBoard:editBoard, deleted:deleted};
});
