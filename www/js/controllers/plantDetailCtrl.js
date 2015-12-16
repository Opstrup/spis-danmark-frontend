/**
 * Created by Opstrup on 15/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('plantList', {
                url: '/detail',
                templateUrl: 'templates/plantDetailTemplate.html',
                controller: 'PlantDetailCtrl'
            });
    }])

    .controller('PlantDetailCtrl', [
        '$scope',
        function (
            $scope) {

            $scope.init = function() {

            };

            $scope.init();
        }]);