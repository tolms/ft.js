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
            expect(ft.object(foo).get('foo.foo')).to.deep.equal({ foo: 'foo' });
        });

        it('should not return value of undefined property', function () {
            expect(ft.object(lorem).get('lorem.ipsum.foo')).to.be.undefined;
            expect(ft.object(foo).get('foo.foo.foo.foo.foo.foo')).to.be.undefined;
        });
    });
});