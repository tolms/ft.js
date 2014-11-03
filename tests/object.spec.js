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

        it('should return value of nested property', function () {
            expect(ft.object(lorem).get('lorem.ipsum.dolor.sit')).to.equal('amet');
            expect(ft.object(lorem).get('lorem.foo')).to.be.a('function');
            expect(ft.object(lorem).get('lorem.foo')()).to.equal('bar');
            expect(ft.object(foo).get('foo.foo')).to.deep.equal({ foo: 'foo' });
            expect(ft.object(foo).get('foo.foo.foo')).to.equal('foo');
        });

        it('should not return value of undefined property', function () {
            expect(ft.object(lorem).get()).to.be.an('undefined');
            expect(ft.object(foo).get('')).to.be.an('undefined');
            expect(ft.object(lorem).get('lorem.ipsum.foo')).to.be.an('undefined');
            expect(ft.object(foo).get('foo.foo.foo.foo.foo.foo')).to.be.an('undefined');
        });
    });
});