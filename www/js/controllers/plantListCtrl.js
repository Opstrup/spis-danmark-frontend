/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('plantList', {
                url: '/plant-list',
                templateUrl: 'templates/plantListTemplate.html',
                controller: 'PlantListCtrl'
            });
    }])

    .controller('PlantListCtrl', [
        '$scope',
        'plantFactory',
        'navigationServices',
        function (
            $scope,
            plantFactory,
            navigationServices) {

            $scope.init = function() {

            };

            $scope.runDB = function() {
                if (window.cordova) {
                    $scope.plantArray = plantFactory.createPlantArray();
                } else {
                    $scope.plantArray = {
                        plant0: {
                            getID: '1',
                            getName: 'Første plante',
                            getNameLatin: 'Latinsk navn'
                        },
                        plant1: {
                            getID: 2,
                            getName: 'Anden plante',
                            getNameLatin: 'Latinsk navn'
                        },
                        plant2: {
                            getID: 3,
                            getName: 'Tredje plante',
                            getNameLatin: 'Latinsk navn'
                        },
                        plant3: {
                            getID: 4,
                            getName: 'Fjerde plante',
                            getNameLatin: 'Latinsk navn'
                        }
                    };
                }
            };

            $scope.showDetailView = function(plantID) {
                console.log(plantID);
                navigationServices.navigate('plantDetail', '1', 'left');
            };

            $scope.init();
        }]);