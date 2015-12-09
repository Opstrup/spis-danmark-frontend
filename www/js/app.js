// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var db = null;

angular.module('spis-danmark', [
  'ionic',
  'ngCordova'
  ])

  .run(function($ionicPlatform, $cordovaSQLite, dbFileReadServices) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

      //db = $cordovaSQLite.openDB({ name: 'spis-danmark.db' });
      //$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text, description text, history text, herb integer, eatable integer)');
      //var query = 'INSERT INTO plants (id, name, name_latin, description, history, herb, eatable) VALUES (1, first_plant, first_plant_latin, description, history, 1, 1)';
      //
      //var queryCreateTable = 'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text)';
      //$cordovaSQLite.execute(db, queryCreateTable).then(function(res) {
      //  console.log('created table!');
      //}, function (err) {
      //  console.log(err);
      //});
      //
      //var query = 'INSERT INTO plants (id, name, name_latin) VALUES (?, ?, ?)';
      //
      //$cordovaSQLite.execute(db, query, [1, 'first plant', 'first plant latin']).then(function(res) {
      //  console.log("INSERT ID -> " + res.insertId);
      //}, function (err) {
      //  console.error(err);
      //});
      //
      //dbFileReadServices.readDBFile('plants_table_data.sql').then(function (dataString){
      //  console.log(dataString);
      //});

    })
  })
  .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
  }]);
