/**
 * Created by Opstrup on 08/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('dbServices', [
        'dbFileReadServices',
        'dbConverterServices',
        '$cordovaSQLite',
        function(dbFileReadServices, dbConverterServices, $cordovaSQLite) {

            var db = $cordovaSQLite.openDB({ name: 'spis-danmark.db' });
            var tableList = ['tables.sql'];
            var dataFileList = ['photos_table_data.sql', 'plant_colors_table_data.sql', 'plants_table_data.sql'];

            return {
                initDB: function() {
                    // Create tables
                    angular.forEach(tableList, function(table) {
                        var queryCreateTable = 'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text)';
                        $cordovaSQLite.execute(db, queryCreateTable).then(function(res) {
                            console.log('created table!', res);
                        });
                    });
                    // Populate tables
                    angular.forEach(dataFileList, function(dataFile) {
                        // Run sql query here
                    });
                },
                addRecord: function(table, data) {
                    // Add a record to the table
                },
                removeRecord: function(table, id) {
                    // Remove a record
                },
                getRecord: function(table, id) {
                    // Get a single record from at table
                },
                getAllRecordsForTable: function(table) {
                    // Get all records in table
                },
            }
        }]);