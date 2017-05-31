app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

  let getUser = (userId) =>{
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
        .then((userObject) => {
          let users = [];
          Object.keys(userObject.data).forEach((key) => {
            users.push(userObject.data[key]); //looping through object of objects and pushing first into user array. A way to loop over objects.
          });
          resolve(users[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  let addUser = (authData) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`,
        JSON.stringify({
          uid: authData.uid,
          username: authData.username
        })
      )
      .then((storeUserSuccess) => {
        resolve(storeUserSuccess);
      })
      .catch((storeUserError) => {
        reject(storeUserError);
      });
    });
  };

  return {getUser:getUser, addUser:addUser};
});