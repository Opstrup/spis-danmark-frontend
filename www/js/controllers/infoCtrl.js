/**
 * Created by Opstrup on 07/01/2016.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.info', {
                url: '/info',
                views: {
                    'infoTemplate' : {
                        templateUrl: 'templates/infoTemplate.html',
                        controller: 'InfoCtrl',
                    }
                }
            });
    }])

    .controller('InfoCtrl', [
        '$scope',
        function ($scope) {

            $scope.init = function() {

            };

            $scope.init();

        }]);