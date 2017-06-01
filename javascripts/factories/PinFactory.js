app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){

  let getPinList = (boardID) => {
    let pins = [];
    return $q((resolve, reject) => {
    console.log("inside PinFactory, logging boardID", boardID);
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

  return {getPinList:getPinList};

});
