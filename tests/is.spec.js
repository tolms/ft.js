/* jshint -W030 */
describe.only('#is()', function () {
    describe('.equal()', function () {
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
        it('#is(arguments).args() - args should be args', function () {
            expect(ft.is(arguments).args()).to.be.true;
        });

        it('#is().args() - undefined should not be args', function () {
            expect(ft.is().args()).to.be.false;
        });

        it('#is(null).args() - null should not be args', function () {
            expect(ft.is(null).args()).to.be.false;
        });

        it('#is(true).args() - true should not be args', function () {
            expect(ft.is(true).args()).to.be.false;
        });

        it('#is(false).args() - false should not be args', function () {
            expect(ft.is(false).args()).to.be.false;
        });

        it('#is(\'\').args() - empty string should not be args', function () {
            expect(ft.is('').args()).to.be.false;
        });

        it('#is(\'foo\').args() - string should not be args', function () {
            expect(ft.is('foo').args()).to.be.false;
        });

        it('#is(0).args() - zero should not be args', function () {
            expect(ft.is(0).args()).to.be.false;
        });

        it('#is(42).args() - number should not be args', function () {
            expect(ft.is(42).args()).to.be.false;
        });

        it('#is([]).args() - array should not be args', function () {
            expect(ft.is([]).args()).to.be.false;
        });

        it('#is(new Date()).args() - date should not be args', function () {
            expect(ft.is(new Date()).args()).to.be.false;
        });

        it('#is(function () {}).args() - function should not be args', function () {
            expect(ft.is(function () {}).args()).to.be.false;
        });

        it('#is(NaN).args() - NaN should not be args', function () {
            expect(ft.is(NaN).args()).to.be.false;
        });

        it('#is({}).args() - object should not be args', function () {
            expect(ft.is({}).args()).to.be.false;
        });

        it('#is(/\s+/ig).args() - regular expression should not be args', function () {
            expect(ft.is(/\s+/ig).args()).to.be.false;
        });
    });

    describe('.array()', function () {
        it('#is(arguments).array() - args should not be array', function () {
            expect(ft.is(arguments).array()).to.be.false;
        });

        it('#is().array() - undefined should not be array', function () {
            expect(ft.is().array()).to.be.false;
        });

        it('#is(null).array() - null should not be array', function () {
            expect(ft.is(null).array()).to.be.false;
        });

        it('#is(true).array() - true should not be array', function () {
            expect(ft.is(true).array()).to.be.false;
        });

        it('#is(false).array() - false should not be array', function () {
            expect(ft.is(false).array()).to.be.false;
        });

        it('#is(\'\').array() - empty string should not be array', function () {
            expect(ft.is('').array()).to.be.false;
        });

        it('#is(\'foo\').array() - string should not be array', function () {
            expect(ft.is('foo').array()).to.be.false;
        });

        it('#is(0).array() - zero should not be array', function () {
            expect(ft.is(0).array()).to.be.false;
        });

        it('#is(42).array() - number should not be array', function () {
            expect(ft.is(42).array()).to.be.false;
        });

        it('#is([]).array() - array should be array', function () {
            expect(ft.is([]).array()).to.be.true;
        });

        it('#is(new Date()).array() - date should not be array', function () {
            expect(ft.is(new Date()).array()).to.be.false;
        });

        it('#is(function () {}).args() - function should not be array', function () {
            expect(ft.is(function () {}).array()).to.be.false;
        });

        it('#is(NaN).array() - NaN should not be array', function () {
            expect(ft.is(NaN).args()).to.be.false;
        });

        it('#is({}).array() - object should not be array', function () {
            expect(ft.is({}).array()).to.be.false;
        });

        it('#is(/\s+/ig).array() - regular expression should not be array', function () {
            expect(ft.is(/\s+/ig).array()).to.be.false;
        });
    });

    describe('.boolean()', function () {
        it('#is(arguments).boolean() - args should not be boolean', function () {
            expect(ft.is(arguments).boolean()).to.be.false;
        });

        it('#is().boolean() - undefined should not be boolean', function () {
            expect(ft.is().boolean()).to.be.false;
        });

        it('#is(null).boolean() - null should not be boolean', function () {
            expect(ft.is(null).boolean()).to.be.false;
        });

        it('#is(true).array() - true should be boolean', function () {
            expect(ft.is(true).boolean()).to.be.true;
        });

        it('#is(false).array() - false should be boolean', function () {
            expect(ft.is(true).boolean()).to.be.true;
        });

        it('#is(\'\').boolean() - empty string should not be boolean', function () {
            expect(ft.is('').boolean()).to.be.false;
        });

        it('#is(\'foo\').boolean() - string should not be boolean', function () {
            expect(ft.is('foo').boolean()).to.be.false;
        });

        it('#is(0).boolean() - zero should not be boolean', function () {
            expect(ft.is(0).boolean()).to.be.false;
        });

        it('#is(42).boolean() - number should not be boolean', function () {
            expect(ft.is(42).boolean()).to.be.false;
        });

        it('#is([]).boolean() - array should not be boolean', function () {
            expect(ft.is([]).boolean()).to.be.false;
        });

        it('#is(new Date()).boolean() - date should not be boolean', function () {
            expect(ft.is(new Date()).boolean()).to.be.false;
        });

        it('#is(function () {}).boolean() - function should not be boolean', function () {
            expect(ft.is(function () {}).boolean()).to.be.false;
        });

        it('#is(NaN).boolean() - NaN should not be boolean', function () {
            expect(ft.is(NaN).boolean()).to.be.false;
        });

        it('#is({}).boolean() - object should not be boolean', function () {
            expect(ft.is({}).boolean()).to.be.false;
        });

        it('#is(/\s+/ig).boolean() - regular expression should not be boolean', function () {
            expect(ft.is(/\s+/ig).boolean()).to.be.false;
        });
    });

    describe('.date()', function () {
        it('#is(arguments).date() - args should not be date', function () {
            expect(ft.is(arguments).date()).to.be.false;
        });

        it('#is().date() - undefined should not be date', function () {
            expect(ft.is().date()).to.be.false;
        });

        it('#is(null).date() - null should not be date', function () {
            expect(ft.is(null).date()).to.be.false;
        });

        it('#is(true).date() - true should not be date', function () {
            expect(ft.is(true).date()).to.be.false;
        });

        it('#is(false).date() - false should not be date', function () {
            expect(ft.is(true).date()).to.be.false;
        });

        it('#is(\'\').date() - empty string should not be date', function () {
            expect(ft.is('').date()).to.be.false;
        });

        it('#is(\'foo\').date() - string should not be date', function () {
            expect(ft.is('foo').date()).to.be.false;
        });

        it('#is(0).date() - zero should not be date', function () {
            expect(ft.is(0).date()).to.be.false;
        });

        it('#is(42).date() - number should not be date', function () {
            expect(ft.is(42).date()).to.be.false;
        });

        it('#is([]).date() - array should not be date', function () {
            expect(ft.is([]).date()).to.be.false;
        });

        it('#is(new Date()).date() - date should be date', function () {
            expect(ft.is(new Date()).date()).to.be.true;
        });

        it('#is(function () {}).date() - function should not be date', function () {
            expect(ft.is(function () {}).date()).to.be.false;
        });

        it('#is(NaN).date() - NaN should not be date', function () {
            expect(ft.is(NaN).date()).to.be.false;
        });

        it('#is({}).date() - object should not be date', function () {
            expect(ft.is({}).date()).to.be.false;
        });

        it('#is(/\s+/ig).date() - regular expression should not be date', function () {
            expect(ft.is(/\s+/ig).date()).to.be.false;
        });
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
        it('#is(arguments).fn() - args should not be function', function () {
            expect(ft.is(arguments).fn()).to.be.false;
        });

        it('#is(undefined).fn() - undefined should not be function', function () {
            expect(ft.is(undefined).fn()).to.be.false;
        });

        it('#is(null).fn() - null should not be function', function () {
            expect(ft.is(null).fn()).to.be.false;
        });

        it('#is(true).fn() - true should not be function', function () {
            expect(ft.is(true).fn()).to.be.false;
        });

        it('#is(false).fn() - false should not be function', function () {
            expect(ft.is(true).fn()).to.be.false;
        });

        it('#is(\'\').fn() - empty string should not be function', function () {
            expect(ft.is('foo').fn()).to.be.false;
        });

        it('#is(\'foo\').fn() - string should not be function', function () {
            expect(ft.is('foo').fn()).to.be.false;
        });

        it('#is(0).fn() - zero should not be function', function () {
            expect(ft.is(0).fn()).to.be.false;
        });

        it('#is(42).fn() - number should be function', function () {
            expect(ft.is(42).fn()).to.be.false;
        });

        it('#is([]).fn() - array should not be function', function () {
            expect(ft.is([]).fn()).to.be.false;
        });

        it('#is(new Date()).fn() - date should not be function', function () {
            expect(ft.is(new Date()).fn()).to.be.false;
        });

        it('#is(function () {}).fn() - function should be function', function () {
            expect(ft.is(function () {}).fn()).to.be.true;
        });

        it('#is(NaN).fn() - NaN should not be function', function () {
            expect(ft.is(NaN).fn()).to.be.false;
        });

        it('#is({}).fn() - object should not be function', function () {
            expect(ft.is({}).fn()).to.be.false;
        });

        it('#is(/\s+/ig).fn() - regular expression should not be function', function () {
            expect(ft.is(/\s+/ig).fn()).to.be.false;
        });
    });

    describe('.int()', function () {
        it('should return value');
    });

    describe('.nan()', function () {
        it('#.is(NaN).nan() - NaN should be NaN', function () {
            expect(ft.is(NaN).nan()).to.be.true;
        });

        it('#.is(obj).nan() - object with valueOf of NaN, converted to Number, should be NaN', function () {
            var obj = {
                valueOf: function () {
                    return NaN;
                }
            };
            expect(ft.is(Number(obj)).nan()).to.be.true;
        });

        it('#.is().nan() - undefined should not be NaN', function () {
            expect(ft.is().nan()).to.be.false;
        });

        it('#.is(null).nan() - null should not be NaN', function () {
            expect(ft.is(null).nan()).to.be.false;
        });

        it('#.is(false).nan() - false should not be NaN', function () {
            expect(ft.is(false).nan()).to.be.false;
        });

        it('#.is(true).nan() - true should not be NaN', function () {
            expect(ft.is(true).nan()).to.be.false;
        });

        it('#.is(0).nan() - zero should not be NaN', function () {
            expect(ft.is(0).nan()).to.be.false;
        });

        it('#.is(Infinity).nan() - infinity should not be NaN', function () {
            expect(ft.is(Infinity).nan()).to.be.false;
        });

        it('#.is(\'foo\').nan() - string should not be NaN', function () {
            expect(ft.is('foo').nan()).to.be.false;
        });

        it('#.is([]).nan() - array should not be NaN', function () {
            expect(ft.is([]).nan()).to.be.false;
        });

        it('#.is({}).nan() - object should not be NaN', function () {
            expect(ft.is({}).nan()).to.be.false;
        });

        it('#.is(function () {}).nan() - function should not be NaN', function () {
            expect(ft.is(function () {}).nan()).to.be.false;
        });
    });

    describe('.native()', function () {
        it('should return value');
    });

    describe('.not()', function () {
        it('should return value');
    });

    describe('.number()', function () {
        it('#is(arguments).number() - args should not be number', function () {
            expect(ft.is(arguments).number()).to.be.false;
        });

        it('#is(undefined).number() - undefined should not be number', function () {
            expect(ft.is(undefined).number()).to.be.false;
        });

        it('#is(null).number() - null should not be number', function () {
            expect(ft.is(null).number()).to.be.false;
        });

        it('#is(true).number() - true should not be number', function () {
            expect(ft.is(true).number()).to.be.false;
        });

        it('#is(false).number() - false should not be number', function () {
            expect(ft.is(true).number()).to.be.false;
        });

        it('#is(\'\').number() - empty string should not be number', function () {
            expect(ft.is('foo').number()).to.be.false;
        });

        it('#is(\'foo\').number() - string should not be number', function () {
            expect(ft.is('foo').number()).to.be.false;
        });

        it('#is(0).number() - zero should be number', function () {
            expect(ft.is(0).number()).to.be.true;
        });

        it('#is(42).number() - number should be number', function () {
            expect(ft.is(42).number()).to.be.true;
        });

        it('#is([]).number() - array should not be number', function () {
            expect(ft.is([]).number()).to.be.false;
        });

        it('#is(new Date()).number() - date should not be number', function () {
            expect(ft.is(new Date()).number()).to.be.false;
        });

        it('#is(function () {}).number() - function should not be number', function () {
            expect(ft.is(function () {}).number()).to.be.false;
        });

        it('#is(NaN).number() - NaN should be number', function () {
            expect(ft.is(NaN).number()).to.be.true;
        });

        it('#is({}).number() - object should not be number', function () {
            expect(ft.is({}).number()).to.be.false;
        });

        it('#is(/\s+/ig).number() - regular expression should not be number', function () {
            expect(ft.is(/\s+/ig).number()).to.be.false;
        });
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
         it('#is(arguments).regexp() - args should not be regexp', function () {
            expect(ft.is(arguments).regexp()).to.be.false;
        });

        it('#is(undefined).regexp() - undefined should not be regexp', function () {
            expect(ft.is(undefined).regexp()).to.be.false;
        });

        it('#is(null).regexp() - null should not be regexp', function () {
            expect(ft.is(null).regexp()).to.be.false;
        });

        it('#is(true).regexp() - true should not be regexp', function () {
            expect(ft.is(true).regexp()).to.be.false;
        });

        it('#is(false).regexp() - false should not be regexp', function () {
            expect(ft.is(true).regexp()).to.be.false;
        });

        it('#is(\'\').regexp() - empty string should not be regexp', function () {
            expect(ft.is('foo').regexp()).to.be.false;
        });

        it('#is(\'foo\').regexp() - string should be regexp', function () {
            expect(ft.is('foo').regexp()).to.be.false;
        });

        it('#is(0).regexp() - zero should not be regexp', function () {
            expect(ft.is(0).regexp()).to.be.false;
        });

        it('#is(42).regexp() - number should not be regexp', function () {
            expect(ft.is(42).regexp()).to.be.false;
        });

        it('#is([]).regexp() - array should not be regexp', function () {
            expect(ft.is([]).regexp()).to.be.false;
        });

        it('#is(new Date()).regexp() - date should not be regexp', function () {
            expect(ft.is(new Date()).regexp()).to.be.false;
        });

        it('#is(function () {}).regexp() - function should not be regexp', function () {
            expect(ft.is(function () {}).regexp()).to.be.false;
        });

        it('#is(NaN).regexp() - NaN should not be regexp', function () {
            expect(ft.is(NaN).regexp()).to.be.false;
        });

        it('#is({}).regexp() - object should not be regexp', function () {
            expect(ft.is({}).regexp()).to.be.false;
        });

        it('#is(/\s+/ig).regexp() - regular expression should be regexp', function () {
            expect(ft.is(/\s+/ig).regexp()).to.be.true;
        });
    });

    describe('.string()', function () {
        it('#is(arguments).string() - args should not be string', function () {
            expect(ft.is(arguments).string()).to.be.false;
        });

        it('#is(undefined).string() - undefined should not be string', function () {
            expect(ft.is(undefined).string()).to.be.false;
        });

        it('#is(null).string() - null should not be string', function () {
            expect(ft.is(null).string()).to.be.false;
        });

        it('#is(true).string() - true should not be string', function () {
            expect(ft.is(true).string()).to.be.false;
        });

        it('#is(false).string() - false should not be string', function () {
            expect(ft.is(true).string()).to.be.false;
        });

        it('#is(\'\').string() - empty string should be string', function () {
            expect(ft.is('foo').string()).to.be.true;
        });

        it('#is(\'foo\').string() - string should be string', function () {
            expect(ft.is('foo').string()).to.be.true;
        });

        it('#is(0).string() - zero should not be string', function () {
            expect(ft.is(0).string()).to.be.false;
        });

        it('#is(42).string() - number should not be string', function () {
            expect(ft.is(42).string()).to.be.false;
        });

        it('#is([]).string() - array should not be string', function () {
            expect(ft.is([]).string()).to.be.false;
        });

        it('#is(new Date()).string() - date should not be string', function () {
            expect(ft.is(new Date()).string()).to.be.false;
        });

        it('#is(function () {}).string() - function should not be string', function () {
            expect(ft.is(function () {}).string()).to.be.false;
        });

        it('#is(NaN).string() - NaN should not be string', function () {
            expect(ft.is(NaN).string()).to.be.false;
        });

        it('#is({}).string() - object should not be string', function () {
            expect(ft.is({}).string()).to.be.false;
        });

        it('#is(/\s+/ig).string() - regular expression should not be string', function () {
            expect(ft.is(/\s+/ig).string()).to.be.false;
        });
    });
});
