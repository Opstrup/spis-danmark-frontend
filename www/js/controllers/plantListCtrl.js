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
        function ($scope) {

            $scope.init = function() {

            };

            $scope.init();
        }]);