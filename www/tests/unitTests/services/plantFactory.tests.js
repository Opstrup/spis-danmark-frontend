/**
 * Created by Opstrup on 11/12/2015.
 */
/**
 * Created by Opstrup on 06/12/2015.
 */

'use strict';

describe('plantServices tests', function () {

    describe('creation of plant', function () {

        var UUT;

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
            inject(function($injector) {
                UUT = $injector.get('plantFactory');
            });
        });

        it('plantServices should be defined', function () {
            expect(UUT).toBeDefined();
        });

        it('should return empty string if name has not been set', function () {
            expect(UUT.getName).toEqual('');
        });

        it('should return name if name has been set', function () {
            UUT.setName = 'First plant';
            expect(UUT.getName).toEqual('First plant');
        });

        it('should return empty string if latin name has not been set', function () {
            expect(UUT.getNameLatin).toEqual('');
        });

        it('should return latin name if latin name has been set', function () {
            UUT.setNameLatin = 'First plant latin';
            expect(UUT.getNameLatin).toEqual('First plant latin');
        });

        it('should return empty string if description has not been set', function () {
            expect(UUT.getDescription).toEqual('');
        });

        it('should return description if description has been set', function () {
            UUT.setDescription = 'description';
            expect(UUT.getDescription).toEqual('description');
        });

        it('should return empty array if season has not been set', function () {
            expect(UUT.getSeason).toEqual([]);
        });

        it('should return type of array when getSeason is called', function () {
            expect(Array.isArray(UUT.getSeason)).toEqual(true);
        });

        it('should return correct season data', function () {
            var seasonArray = ['summer', 'winter'];
            UUT.setSeason = seasonArray;

            expect(UUT.getSeason[0]).toEqual('summer');
        });

        it('should return the whole array', function () {
            var seasonArray = ['summer', 'winter'];
            UUT.setSeason = seasonArray;

            expect(UUT.getSeason).toEqual(seasonArray);
        });
    });
});


