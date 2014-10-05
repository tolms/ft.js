/* jshint -W030 */
describe('#is()', function () {
    describe.only('.equal()', function () {
        it('#is().equal() - two absent args should be the same', function () {
            expect(ft.is().equal()).to.be.true;
        });

        it('#is().equal(undefined) - one absent arg and undefined should be the same', function () {
            expect(ft.is().equal(undefined)).to.be.true;
        });

        it('#is(undefined).equal(undefined) - undefined should be undefined', function () {
            expect(ft.is(undefined).equal(undefined)).to.be.true;
        });

        it('#is(null).equal(null) - null should be null', function () {
            expect(ft.is(null).equal(null)).to.be.true;
        });

        it('#is(undefined).equal(null) - undefined should not be null', function () {
            expect(ft.is(undefined).equal(null)).to.be.false;
        });

        it('#is(true).equal(true) - true should be true', function () {
            expect(ft.is(true).equal(true)).to.be.true;
        });

        it('#is(false).equal(false) - false should be a false', function () {
            expect(ft.is(false).equal(false)).to.be.true;
        });

        it('#is(true).equal(false) - true should not be false', function () {
            expect(ft.is(true).equal(false)).to.be.false;
        });

        it('#is(NaN).equal(NaN) - NaN should be NaN', function () {
            expect(ft.is(NaN).equal(NaN)).to.be.true;
        });

        it('#is(0).equal(0) - zero should be zero', function () {
            expect(ft.is(0).equal(0)).to.be.true;
        });

        it('#is(0).equal(-0) - zero should not be negative zero', function () {
            expect(ft.is(0).equal(-0)).to.be.false;
        });

        it('#is(Infinity).equal(Infinity) - infinity should be infinity', function () {
            expect(ft.is(Infinity).equal(Infinity)).to.be.true;
        });

        it('#is(Infinity).equal(-Infinity) - infinity should not be negative infinity', function () {
            expect(ft.is(Infinity).equal(-Infinity)).to.be.false;
        });

        it('#is(42).equal(42) - 42 should be 42', function () {
            expect(ft.is(42).equal(42)).to.be.true;
        });

        it('#is(42).equal(-42) - 42 should not be -42', function () {
            expect(ft.is(42).equal(-42)).to.be.false;
        });

        it('#is(\'\').equal(\'\') - empty string should be empty string', function () {
            expect(ft.is('').equal('')).to.be.true;
        });

        it('#is(\'foo\').equal(\'foo\') - string should be string', function () {
            expect(ft.is('foo').equal('foo')).to.be.true;
        });

        it('#is(\'foo\').equal(\'bar\') - string should not be different string', function () {
            expect(ft.is('foo').equal('bar')).to.be.false;
        });
    });

    describe('.args()', function () {
        it('should return value');
    });

    describe('.array()', function () {
        it('should return value');
    });

    describe('.boolean()', function () {
        it('should return value');
    });

    describe('.date()', function () {
        it('should return value');
    });

    describe('.defined()', function () {
        it('should return value');
    });

    describe('.error()', function () {
        it('should return value');
    });

    describe('.even()', function () {
        it('should return value');
    });

    describe('.float()', function () {
        it('should return value');
    });

    describe('.fn()', function () {
        it('should return value');
    });

    describe('.int()', function () {
        it('should return value');
    });

    describe('.nan()', function () {
        it('should return value');
    });

    describe('.native()', function () {
        it('should return value');
    });

    describe('.not()', function () {
        it('should return value');
    });

    describe('.number()', function () {
        it('should return value');
    });

    describe('.odd()', function () {
        it('should return value');
    });

    describe('.object()', function () {
        it('should return value');
    });

    describe('.propertyOf()', function () {
        it('should return value');
    });

    describe('.regexp()', function () {
        it('should return value');
    });

    describe('.string()', function () {
        it('should return value');
    });
});
