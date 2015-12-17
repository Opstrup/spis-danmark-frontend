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
                console.log('hello from list');
            };

            $scope.runDB = function() {
                $scope.plantArray = plantFactory.getPlantArray();
            };

            $scope.showPlantDetailView = function(plantID) {
                navigationServices.navigate('plantDetail', { data:plantID },'left');
            };

            $scope.init();
        }]);