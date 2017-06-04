let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    // console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    // console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  //watch method that fires on change of a route.  3 inputs.
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthFactory.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider) {  // $routeProvider --- angular key word
  $routeProvider
  .when('/auth', {
    templateUrl: '/partials/auth.html',
    controller: 'AuthCtrl'
  })
  .when('/board/:uid/pin/:boardid', {
    templateUrl: '/partials/pin-view.html',
    controller: 'PinViewCtrl'
    // resolve : {isAuth}
  })
  .when('/pin/new/:boardid', {
    templateUrl: '/partials/pin-new.html',
    controller: 'PinNewCtrl'
    // resolve : {isAuth}
  })
  .when('/pin/edit/:id/:boardid', {
    templateUrl: '/partials/pin-edit.html',
    controller: 'PinEditCtrl'
    // resolve : {isAuth}
  })
  .when('/board/view', {
    templateUrl: '/partials/board-view.html',
    controller: 'BoardViewCtrl'
    // resolve : {isAuth}
  })
  .when('/board/new', {
    templateUrl: '/partials/board-new.html',
    controller: 'BoardNewCtrl'
    // resolve : {isAuth}
  })
  .when('/board/edit/:id', {
    templateUrl: '/partials/board-edit.html',
    controller: 'BoardEditCtrl'
    // resolve : {isAuth}
  })
  .otherwise('/auth');
});
