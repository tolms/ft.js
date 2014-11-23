describe('Common functions', function () {
    describe('ft.type()', function () {
        it('Should return a type of value', function () {
            expect(ft.type(arguments)).to.equal('arguments');

            expect(ft.type([])).to.equal('array');
            expect(ft.type([1, 2, 3])).to.equal('array');
            expect(ft.type(new Array(1, 2, 3))).to.equal('array');

            expect(ft.type(true)).to.equal('boolean');
            expect(ft.type(false)).to.equal('boolean');

            expect(ft.type(new Date())).to.equal('date');

            expect(ft.type(function () {})).to.equal('function');
            expect(ft.type(Math.abs)).to.equal('function');

            expect(ft.type(undefined)).to.equal('undefined');

            expect(ft.type(NaN)).to.equal('nan');

            expect(ft.type(42)).to.equal('number');
            expect(ft.type(0)).to.equal('number');
            expect(ft.type(-0)).to.equal('number');

            expect(ft.type(null)).to.equal('null');

            expect(ft.type({})).to.equal('object');

            expect(ft.type(/\s+/ig)).to.equal('regexp');
            expect(ft.type(new RegExp('\\s+', 'ig'))).to.equal('regexp');

            expect(ft.type('foo')).to.equal('string');
            expect(ft.type('')).to.equal('string');
        });
    });
});