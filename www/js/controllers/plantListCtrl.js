/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantList', {
                url: '/plant-list',
                views: {
                    'plantListTemplate' : {
                        templateUrl: 'templates/plantListTemplate.html',
                        controller: 'PlantListCtrl'
                    }
                }
            });
    }])

    .controller('PlantListCtrl', [
        '$scope',
        'plantFactory',
        'navigationServices',
        '$timeout',
        function (
            $scope,
            plantFactory,
            navigationServices,
            $timeout) {

            $scope.init = function() {
                $scope.showSpinner = false;

                // Check if database already is installed
                if(window.localStorage['db'])
                    $scope.plantArray = plantFactory.getPlantArray();
                else
                    waitForPlantsArray();

            };

            function waitForPlantsArray() {
                // Waiting for db to be instantiated
                // Add spinning wheel while plant list gets created
                var milliseconds = 5000;
                $scope.showSpinner = true;
                $timeout(function() {
                    $scope.plantArray = plantFactory.getPlantArray();
                    $scope.showSpinner = false;
                }, milliseconds);
            };

            $scope.showPlantDetailView = function(plantID) {
                navigationServices.navigate('tab.plantDetail', { data:plantID },'left');
            };

            $scope.init();
        }]);