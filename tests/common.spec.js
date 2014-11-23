/* jshint -W053 */
/* jshint -W054 */
describe('Common functions', function () {
    describe('ft.type()', function () {
        it('Should return a type of value', function () {
            expect(ft.type(arguments)).to.equal('arguments');

            expect(ft.type([])).to.equal('array');
            expect(ft.type([1, 2, 3])).to.equal('array');
            expect(ft.type(new Array(1, 2, 3))).to.equal('array');

            expect(ft.type(true)).to.equal('boolean');
            expect(ft.type(false)).to.equal('boolean');
            expect(ft.type(new Boolean(false))).to.equal('boolean');
            expect(ft.type(Boolean(true))).to.equal('boolean');

            expect(ft.type(new Date())).to.equal('date');

            expect(ft.type(function () {})).to.equal('function');
            expect(ft.type(new Function('return true'))).to.equal('function');
            expect(ft.type(Math.abs)).to.equal('function');

            expect(ft.type(undefined)).to.equal('undefined');

            expect(ft.type(NaN)).to.equal('nan');

            expect(ft.type(42)).to.equal('number');
            expect(ft.type(new Number(42))).to.equal('number');
            expect(ft.type(Number(42))).to.equal('number');
            expect(ft.type(0)).to.equal('number');
            expect(ft.type(-0)).to.equal('number');

            expect(ft.type(Infinity)).to.equal('infinity');

            expect(ft.type(null)).to.equal('null');

            expect(ft.type({})).to.equal('object');

            expect(ft.type(/\s+/ig)).to.equal('regexp');
            expect(ft.type(new RegExp('\\s+', 'ig'))).to.equal('regexp');

            expect(ft.type('foo')).to.equal('string');
            expect(ft.type(new String('foo'))).to.equal('string');
            expect(ft.type(String('foo'))).to.equal('string');
            expect(ft.type('')).to.equal('string');
        });
    });

    describe('ft.equal()', function () {
        it('Two absent args should be equal', function () {
            expect(ft.equal()).to.equal(true);
        });

        it('One absent arg and undefined should be equal', function () {
            expect(ft.equal(undefined)).to.equal(true);
        });

        it('Undefined should be equal to undefined', function () {
            expect(ft.equal(undefined, undefined)).to.equal(true);
        });

        it('Null should be equal to null', function () {
            expect(ft.equal(null, null)).to.equal(true);
        });

        it('Undefined should not be equal to null', function () {
            expect(ft.equal(undefined, null)).to.equal(false);
        });

        it('True should be equal to true', function () {
            expect(ft.equal(true, true)).to.equal(true);
        });

        it('False should be equal to false', function () {
            expect(ft.equal(false, false)).to.equal(true);
        });

        it('True should not be equal to false', function () {
            expect(ft.equal(true, false)).to.equal(false);
        });

        it('NaN should be equal to NaN', function () {
            expect(ft.equal(NaN, NaN)).to.equal(true);
        });

        it('Zero should be equal to zero', function () {
            expect(ft.equal(0, 0)).to.equal(true);
        });

        it('Zero should not be equal to negative zero', function () {
            expect(ft.equal(0, -0)).to.equal(false);
        });

        it('Infinity should be equal to infinity', function () {
            expect(ft.equal(Infinity, Infinity)).to.equal(true);
        });

        it('Infinity should not be equal to negative infinity', function () {
            expect(ft.equal(Infinity, -Infinity)).to.equal(false);
        });

        it('42 should be equal to 42', function () {
            expect(ft.equal(42, 42)).to.equal(true);
        });

        it('42 should not be equal to -42', function () {
            expect(ft.equal(42, -42)).to.equal(false);
        });

        it('Empty string should be equal to empty string', function () {
            expect(ft.equal('', '')).to.equal(true);
        });

        it('String should be equal to yourself', function () {
            expect(ft.equal('foo', 'foo')).to.equal(true);
        });

        it('String should not be equal to different string', function () {
            expect(ft.equal('foo', 'bar')).to.equal(false);
        });
    });
});