/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('plantFactory', [
        function() {
            var _id = null;
            var _name = "";
            var _nameLatin = "";
            var _description = "";
            var _history = "";
            var _application = new Array();
            var _habitat = new Array();
            var _season = new Array();
            var _photo = new Array();
            var _color = new Array();
            var _size = new Array();

            return{
                get getID() {
                    return _id;
                },

                set setID(id) {
                  _id = id;
                },

                get getName() {
                    return _name;
                },

                set setName(name) {
                    _name = name;
                },

                get getNameLatin() {
                    return _nameLatin;
                },

                set setNameLatin(nameLatin) {
                    _nameLatin = nameLatin;
                },

                get getDescription() {
                    return _description;
                },

                set setDescription(description) {
                  _description = description;
                },

                get getHistory() {
                    return _history;
                },

                set setHistory(history) {
                    _history = history;
                },

                get getApplication() {
                    return _application;
                },

                set setApplication(applications) {
                    angular.forEach(applications, function(application) {
                       _application.push(application);
                    });
                },

                get getHabitat() {
                    return _habitat;
                },

                set setHabitat(habitats) {
                    angular.forEach(habitats, function(habitat) {
                        _habitat.push(habitat);
                    });
                },

                get getSeason() {
                    return _season;
                },

                set setSeason(seasons) {
                    angular.forEach(seasons, function(season) {
                        _season.push(season);
                    });
                },

                get getPhoto() {
                    return _photo;
                },

                set setPhoto(photos) {
                    angular.forEach(photos, function(photo) {
                        _photo.push(photo);
                    });
                },

                get getColor() {
                    return _color;
                },

                set setColor(colors) {
                    angular.forEach(colors, function(color) {
                        _color.push(color);
                    });
                },

                get getSize() {
                    return _size;
                },

                set setSize(sizes) {
                    angular.forEach(sizes, function(size) {
                        _size.push(size);
                    });
                }
            }

        }]);