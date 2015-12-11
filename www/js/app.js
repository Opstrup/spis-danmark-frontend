// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var db = null;

angular.module('spis-danmark', [
  'ionic',
  'ngCordova'
  ])

  .run(function($ionicPlatform, $cordovaSQLite, dbFileReadServices, dbServices) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

      // Check if running on mobile environment
      if (window.cordova) {
        if(window.localStorage['db'])
          dbServices.openDB();
        else
          dbServices.initDB();
      }
    })
  })
  .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/plant-list');
  }]);
