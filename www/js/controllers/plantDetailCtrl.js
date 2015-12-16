/**
 * Created by Opstrup on 15/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('plantDetail', {
                url: '/plant-detail/:plantID',
                templateUrl: 'templates/plantDetailTemplate.html',
                controller: 'PlantDetailCtrl'
            });
    }])

    .controller('PlantDetailCtrl', [
        '$scope', '$stateParams',
        function (
            $scope,
            $stateParams) {
            $scope.plantid = $stateParams.plantID;
            $scope.init = function() {

            };

            $scope.init();
        }]);