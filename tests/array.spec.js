var expect = require('chai').expect;
var ft = require('../build/ft.min.js');

describe('Array', function () {
    describe('.value()', function () {
        it('should return value', function () {
            expect(ft.array(1).value()).to.equal(1);
        });
    });
});