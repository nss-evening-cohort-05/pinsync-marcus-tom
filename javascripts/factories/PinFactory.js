app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){
  let pinList = () => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/Pins.json`)
      .then((addPins) => {
        console.log("pin list", addPins);
          let pinCollection = addPins.data;
          console.log(pinCollection);
          // if(addressesCollection !== null){
            Object.keys(pinCollection).forEach((key) => {
              pinCollection[key].id=key;
              pins.push(pinCollection[key]);
            });
          // }
          console.log("resolve", pinCollection);
          resolve(pins);
        resolve(addPins);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return {pinList:pinList};

});
