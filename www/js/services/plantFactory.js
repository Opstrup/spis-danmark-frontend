/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('plantFactory', [
        'Plant',
        'dbServices',
        function(
            Plant,
            dbServices) {

            var createPlant = function(plantData) {
                var applications = new Array();
                var habitats = new Array();
                var seasons = new Array();
                var photos = new Array();
                var colors = new Array();
                var sizes = new Array();

                dbServices.getRecordsWithPlantId('plant_colors', plantData.id).then(function (res) {
                    if(res.rows.length > 0) {
                        for(var i = 0; i < res.rows.length; i++) {
                            dbServices.getRecord('colors', res.rows.item(i).color_id).then(function (color) {
                                colors.push(color.rows.item(0).color);
                            });
                        }
                    }
                }, function (err) {
                    console.error(err);
                });

                return new Plant(plantData.id,
                                 plantData.name,
                                 plantData.name_latin,
                                 plantData.description,
                                 plantData.history,
                                 applications,
                                 habitats,
                                 seasons,
                                 photos,
                                 colors,
                                 sizes);
            };

            return{
                createPlantArray: function() {
                    //Create and return array of all the plants in the system.
                    var plantArray =  new Array();
                    dbServices.getAllRecordsForTable('plants').then(function (res) {
                        if(res.rows.length > 0) {
                            for(var i = 0; i < res.rows.length; i++) {
                                var plantData = res.rows.item(i);
                                plantArray.push(createPlant(plantData));
                            }
                            console.log(plantArray);
                        }
                    }, function (err) {
                        console.error(err);
                    });

                    return plantArray;
                }
            }

        }]);