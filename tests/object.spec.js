describe('#object()', function () {
    describe('.get()', function () {
        var lorem, foo;

        before(function () {
            lorem = {
                lorem: {
                    ipsum: {
                        dolor: {
                            sit: 'amet'
                        }
                    },
                    foo: function () {
                        return 'bar';
                    }
                }
            };
            foo = {
                foo: {
                    foo: {
                        foo: 'foo'
                    }
                }
            };
        });

        it('Should return value of nested property', function () {
            expect(ft.object(lorem).get('lorem.ipsum.dolor.sit')).to.equal('amet');
            expect(ft.object(lorem).get('lorem.foo')).to.be.a('function');
            expect(ft.object(lorem).get('lorem.foo')()).to.equal('bar');
            expect(ft.object(foo).get('foo.foo')).to.deep.equal({ foo: 'foo' });
            expect(ft.object(foo).get('foo.foo.foo')).to.equal('foo');
        });

        it('Should not return value of undefined property', function () {
            expect(ft.object(lorem).get()).to.be.an('undefined');
            expect(ft.object(foo).get('')).to.be.an('undefined');
            expect(ft.object(lorem).get('lorem.ipsum.foo')).to.be.an('undefined');
            expect(ft.object(foo).get('foo.foo.foo.foo.foo.foo')).to.be.an('undefined');
        });
    });

    describe('.result()', function () {
        var obj;

        before(function () {
            obj = {
                attr: 'value',
                arr: [0, 1, 2],
                num: 2,
                falsey: '',
                method: function () {
                    return this.attr;
                }
            };
        });

        it('Should return nothing for undefined object properties.', function() {
            expect(ft.object(obj).result('some')).to.be.an('undefined');
        });

        it('Should evaluate a method with object context and return its result.', function() {
            expect(ft.object(obj).result('method')).to.equal('value');
        });

        it('Should evaluate an attribute and return its result.', function() {
            expect(ft.object(obj).result('attr')).to.equal('value');
            expect(ft.object(obj).result('falsey')).to.equal('');
            expect(ft.object(obj).result('arr')).to.deep.equal([0, 1, 2]);
        });
    });
});