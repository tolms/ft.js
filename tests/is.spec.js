/* jshint -W030 */
/* jshint -W053 */
describe('#is()', function () {
    describe('.blankString()', function () {
        it('String should be blank', function () {
            expect(ft.is('').blankString()).to.equal(true);
            expect(ft.is('                  ').blankString()).to.equal(true);
            expect(ft.is('\0 \b \t \n \v \f \r').blankString()).to.equal(true);
        });

        it('String should not be blank', function () {
            expect(ft.is('Hello, world!').blankString()).to.equal(false);
            expect(ft.is('\n Hello,   \t   World!        \r     ').blankString()).to.equal(false);
        });
    });

    describe('.float()', function () {
        it('should return value');
    });

    describe('.int()', function () {
        it('should return value');
    });

    describe('.primitive()', function () {
        it('Boolean should be primitive', function () {
            expect(ft.is(true).primitive()).to.equal(true);
            expect(ft.is(false).primitive()).to.equal(true);
            expect(ft.is(new Boolean(false)).primitive()).to.equal(true);
            expect(ft.is(Boolean(true)).primitive()).to.equal(true);
        });

        it('String should be primitive', function () {
            expect(ft.is('foo').primitive()).to.equal(true);
            expect(ft.is(new String('foo')).primitive()).to.equal(true);
            expect(ft.is(String('foo')).primitive()).to.equal(true);
            expect(ft.is('').primitive()).to.equal(true);
        });

        it('Number should be primitive', function () {
            expect(ft.is(42).primitive()).to.equal(true);
            expect(ft.is(new Number(42)).primitive()).to.equal(true);
            expect(ft.is(Number(42)).primitive()).to.equal(true);
            expect(ft.is(0).primitive()).to.equal(true);
            expect(ft.is(-0).primitive()).to.equal(true);
        });

        it('Null should be primitive', function () {
            expect(ft.is(null).primitive()).to.equal(true);
        });

        it('Undefined should be primitive', function () {
            expect(ft.is(undefined).primitive()).to.equal(true);
            expect(ft.is().primitive()).to.equal(true);
        });
    });

    describe('.validDate()', function () {
        it('Should be valid date', function () {
            expect(ft.is(new Date()).validDate()).to.equal(true);
            expect(ft.is(new Date(2015, 0, 1)).validDate()).to.equal(true);
        });

        it('Should not be valid date', function () {
            var date = new Date('');
            expect(ft.type(date)).to.equal('date');
            expect(ft.is(date).validDate()).to.equal(false);
        });
    });
});
