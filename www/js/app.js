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

      // then override any default you want
      window.plugins.nativepagetransitions.globalOptions.duration = 350;
      window.plugins.nativepagetransitions.globalOptions.iosdelay = 250;
      window.plugins.nativepagetransitions.globalOptions.androiddelay = 250;
      window.plugins.nativepagetransitions.globalOptions.winphonedelay = 250;
      window.plugins.nativepagetransitions.globalOptions.slowdownfactor = 4;
      // these are used for slide left/right only currently
      window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop = 0;
      window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom = 0;

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
  .config(['$urlRouterProvider', '$ionicConfigProvider', '$stateProvider', function($urlRouterProvider, $ionicConfigProvider, $stateProvider) {

      /* New state for the tab view */
      $stateProvider
          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
          });

      $ionicConfigProvider.views.transition('none');
      $ionicConfigProvider.tabs.position('bottom');
      $urlRouterProvider.otherwise('/tab/plant-list');
  }]);
