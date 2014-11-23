/* jshint -W030 */
/* jshint -W053 */
describe('#is()', function () {
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
});
