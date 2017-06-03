app.factory("PinFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){

  let getPinList = (boardID) => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardID"&equalTo="${boardID}"`)
      .then((fbPins) => {
        console.log("pin list", fbPins);
          let pinCollection = fbPins.data;
          console.log(pinCollection);
          // if(addressesCollection !== null){
            Object.keys(pinCollection).forEach((key) => {
              pinCollection[key].id=key;
              pins.push(pinCollection[key]);
            });
          // }
          resolve(pins);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let postNewPin = (pinId) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify({
        description: pinId.description,
        title: pinId.title,
        uid: $rootScope.user.uid,
        boardID: pinId.boardid
      }))
      .then((result) => {
        console.log(result);
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };



  return {getPinList:getPinList, postNewPin:postNewPin};

});
