/**
 * Created by Opstrup on 08/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('dbServices', [
        'dbFileReadServices',
        'dbConverterServices',
        '$cordovaSQLite',
        function(dbFileReadServices,
                 dbConverterServices,
                 $cordovaSQLite) {

            var db;
            var tableList = ['tables.sql'];
            var dataFileList = ['photos_table_data.sql', 'plant_colors_table_data.sql', 'plants_table_data.sql'];

            return {
                openDB: function() {
                    db = $cordovaSQLite.openDB({ name: 'spis-danmark.db' });
                },

                initDB: function() {
                    this.openDB();

                    // Create tables
                    angular.forEach(tableList, function(tableQueries) {
                        dbFileReadServices.readDBFile(tableQueries).then(function(dataString){
                            angular.forEach(dbConverterServices.convertStringToTables(dataString), function(query){
                                $cordovaSQLite.execute(db, query).then(function(res) {
                                    console.log('created table!', res);
                                }, function (err) {
                                    console.error(err);
                                });
                            });
                        });
                    });

                    // Populate tables
                    angular.forEach(dataFileList, function(dataFile) {
                        // Run sql query here
                        dbFileReadServices.readDBFile(dataFile).then(function(dataString){
                            var data = dbConverterServices.convertStringToRows(dataString);
                            var query = data.splice(0, 1)[0];
                            angular.forEach(data, function(row){
                                $cordovaSQLite.execute(db, query, row).then(function(res) {
                                    console.log('INSERT RECORD', res);
                                }, function (err) {
                                    console.error(err);
                                });
                            });
                        });
                    });

                },
                addRecord: function(table, data) {
                    // Add a record to the table
                },
                removeRecord: function(table, id) {
                    // Remove a record
                },
                getRecord: function(table, id) {
                    var query = 'SELECT * FROM ' + table + ' WHERE id = ?';
                    return $cordovaSQLite.execute(db, query, [id]);
                },
                getAllRecordsForTable: function(table) {
                    var query = 'SELECT * FROM ' + table;
                    return $cordovaSQLite.execute(db, query);
                }
            }
        }]);