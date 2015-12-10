/**
 * Created by Opstrup on 04/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('test', {
                url: '/',
                templateUrl: 'templates/testTemplate.html',
                controller: 'TestCtrl'
            });
    }])

    .controller('TestCtrl', [
        '$scope',
        '$cordovaSQLite',
        '$cordovaFile',
        'dbFileReadServices',
        'dbServices',
        function ($scope,
                  $cordovaSQLite,
                  $cordovaFile,
                  dbFileReadServices,
                  dbServices) {

            $scope.init = function() {
                $scope.msg = 'hello from init func';
            };

            $scope.query = function() {
                dbServices.getAllRecordsForTable('plants').then(function (res){
                    if(res.rows.length > 0) {
                        console.log('Numbers of records in table', res.rows.length);
                    } else {
                        console.log("No results found");
                    }
                }, function (err) {
                    console.error(err);
                });
            };

            $scope.readFile = function() {
                dbFileReadServices.readDBFile('plants_table_data.sql').then(function (dataString){
                    console.log(dataString);
                });
            };

            $scope.createDB = function() {
                dbServices.initDB();
            };

            $scope.grabRecord = function(plantID) {
              dbServices.getRecord('plants', plantID).then(function (res){
                  if(res.rows.length > 0) {
                      console.log('length of rows: ' + res.rows.length);
                      console.log("SELECTED -> " + res.rows.item(0).name + " " + res.rows.item(0).name_latin + " " + res.rows.item(0).description + " " + res.rows.item(0).history);
                  } else {
                      console.log("No results found");
                  }
              }, function (err) {
                  console.error(err);
              });
            };

            $scope.init();
        }]);