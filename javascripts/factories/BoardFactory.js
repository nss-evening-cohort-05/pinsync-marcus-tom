app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG){

  let boardList = () => {
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
          console.log("resolve", boardCollection);
          resolve(boards);
        resolve(addBoard);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  return{boardList:boardList};
});
