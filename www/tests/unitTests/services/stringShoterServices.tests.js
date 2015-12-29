/**
 * Created by Opstrup on 28/12/2015.
 */
/**
 * Created by Opstrup on 11/12/2015.
 */
/**
 * Created by Opstrup on 06/12/2015.
 */

'use strict';

describe('Shorting strings', function () {

    describe('shorting different string lengths', function () {

        var UUT;

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
            inject(function($injector) {
                UUT = $injector.get('stringShorterServices');
            });

        });

        /*it('plantServices should be defined', function () {
            expect(UUT).toBeDefined();
        });*/

    });
});
