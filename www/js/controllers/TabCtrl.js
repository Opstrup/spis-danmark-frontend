/**
 * Created by Opstrup on 10/01/2016.
 */
'use strict';

angular.module('spis-danmark')

    .controller('TabCtrl', [
        '$scope',
        '$ionicTabsDelegate',
        function ($scope,
                  $ionicTabsDelegate) {

            $scope.init = function () {
                console.log('Tab Ctrl');
            };

            $scope.changeTab = function () {
              console.log($ionicTabsDelegate.selectedIndex());
            };

            $scope.selectTabWithIndex = function(index) {
                console.log('go to', index);
                $ionicTabsDelegate.select(index);
            };

            $scope.init();

        }]);