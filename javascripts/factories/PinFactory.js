app.factory("PinFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){

  let getPinList = (boardID) => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardID"&equalTo="${boardID}"`)
      .then((fbPins) => {
          let pinCollection = fbPins.data;
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

  let getSinglePin = (pinId) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
      .then((fbPins) => {
          fbPins.data.id = pinId;
          resolve(fbPins);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let postNewPin = (pinId, boardId) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify({
        description: pinId.description,
        title: pinId.title,
        uid: $rootScope.user.uid,
        url: pinId.url,
        boardID: boardId
      }))
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let editPin = (pin) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${pin.id}.json`, JSON.stringify({
        description: pin.description,
        title: pin.title,
        uid: $rootScope.user.uid,
        url: pin.url,
        boardID: pin.boardID
      }))
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let deleted = (id) => {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${id}.json`)
      .then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };



  return {getPinList:getPinList, postNewPin:postNewPin, deleted:deleted, getSinglePin:getSinglePin, editPin:editPin};

});
