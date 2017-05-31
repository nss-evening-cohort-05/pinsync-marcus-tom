app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory){

  $scope.auth = {};

  let logMeIn = () => {
    AuthFactory.authenticate($scope.auth).then((userCreds) => {
      console.log("userCreds", userCreds);
      return UserFactory.getUser(userCreds.uid);
    }, (error) => {
      $scope.alerts.push({msg: error.message});
      console.log("authenticate error", error);
    }).then((user) => {
      $rootScope.user = user;
      $location.url("/pin/view");
    }).catch((error) => {
      console.log("getUser error", error);
    });
  };

  $scope.registerUser = () => {
    AuthFactory.registerWithEmail($scope.auth).then((didRegister) =>{
      $scope.auth.uid = didRegister.uid;
      return UserFactory.addUser($scope.auth);
    }, (error) => {
      console.log("registerWithEmail error", error);
    })
    .then((registerComplete) => {
      console.log("registerComplete", registerComplete);
      logMeIn();
    }).catch((error) => {
      console.log("addUser error", error);
    });
  };

  $scope.loginUser = () => {
    logMeIn();
  };


});
