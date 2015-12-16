/**
 * Created by Opstrup on 16/12/2015.
 */
'use strict';
angular.module('spis-danmark')

    .service('navigationServices', function($state) {
        //directly binding events to this context
        this.navigate = function(view, data, direction) {
            $state.go(view, data);

            // Checking for environment
            if(window.cordova) {
                window.plugins.nativepagetransitions.slide({
                        "direction": direction
                    },
                    function(msg) {
                        console.log("success: " + msg)
                    }, // called when the animation has finished
                    function(msg) {
                        alert("error: " + msg)
                    } // called in case you pass in weird values
                );
            }
        };
    });
