/**
 * Created by Opstrup on 15/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('plantDetail', {
                url: '/plant-detail',
                templateUrl: 'templates/plantDetailTemplate.html',
                controller: 'PlantDetailCtrl',
                params: {
                    data: null
                }
            });
    }])

    .controller('PlantDetailCtrl', [
        '$scope',
        'plantFactory',
        '$stateParams',
        'navigationServices',
        function (
        $scope,
        plantFactory,
        $stateParams,
        navigationServices) {

            $scope.init = function() {
                $scope.plant = plantFactory.getPlantWithID($stateParams.data);

            };

            $scope.showPlantListView = function() {
                navigationServices.navigate('plantList', '' ,'right');
            };

            $scope.init();
        }]);