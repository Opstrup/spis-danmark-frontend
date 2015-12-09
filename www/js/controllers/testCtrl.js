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
        function ($scope,
                  $cordovaSQLite,
                  $cordovaFile,
                  dbFileReadServices) {

            //var db = $cordovaSQLite.openDB({ name: 'spis-danmark.db' });

            $scope.init = function () {
                $scope.msg = 'hello from init func';
            };

            $scope.query = function () {
                var query = 'SELECT * FROM plants';
                console.log('Query function is called');
                $cordovaSQLite.execute(db, query).then(function (res){
                    if(res.rows.length > 0) {
                        console.log("SELECTED -> " + res.rows.item(0).name + " " + res.rows.item(0).name_latin);
                    } else {
                        console.log("No results found");
                    }
                }, function (err) {
                    console.error(err);
                });
            };

            $scope.readFile = function () {
                dbFileReadServices.readDBFile('plants_table_data.sql').then(function (dataString){
                    console.log(dataString);
                });
            };

            $scope.init();
        }]);