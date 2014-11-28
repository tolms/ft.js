describe('#fn()', function () {
    describe('.after()', function () {
        it('Should', function () {

        });
    });

    describe('.before()', function () {
        it('Should', function () {

        });
    });

    describe('.compose()', function () {
        it('Should', function () {

        });
    });

    describe('.curry()', function () {
        it('Should', function () {

        });
    });

    describe('.debounce()', function () {
        it('Should', function () {

        });
    });

    describe('.delay()', function () {
        it('Should', function () {

        });
    });

    describe('.defer()', function () {
        it('Should', function () {

        });
    });

    describe('.memoize()', function () {
        it('Should', function () {

        });
    });

    describe('.negate()', function () {
        it('Should', function () {

        });
    });

    describe('.once()', function () {
        it('Should', function () {

        });
    });

    describe('.partial()', function () {
        var add, concat;

        before(function () {
            add = function (x, y) {
                return x + y;
            };

            concat = function (x, y, z) {
                return x + ', ' + y + ' ' + z;
            };
        });

        it('Should partially apply single argument', function () {
            var add5 = ft.fn(add).partial(5);
            expect(add5(7)).to.equal(12);
            expect(add5(-7)).to.equal(-2);
        });

        it('Should ignore excessive arguments', function () {
            var add10 = ft.fn(add).partial(5, 5);
            expect(add10(7)).to.equal(10);
            expect(add10(-7)).to.equal(10);
        });

        it('Should partially apply multiple arguments', function () {
            var hi = ft.fn(concat).partial('Hi');
            expect(hi('John', 'Doe')).to.equal('Hi, John Doe');
        });
    });

    describe('.partialRight()', function () {
        var append, concat;

        before(function () {
            append = function (x, y) {
                return x + ' ' + y;
            };

            concat = function (x, y, z) {
                return x + ' ' + y + z;
            };
        });

        it('Should partially apply single argument', function () {
            var hello = ft.fn(append).partialRight('World!');
            expect(hello('Hello,')).to.equal('Hello, World!');
            expect(hello('Incredible')).to.equal('Incredible World!');
        });

        it('Should push out arguments', function () {
            var hello = ft.fn(append).partialRight('A', 'B');
            expect(hello('C')).to.equal('C A');
            expect(hello('C', 'D')).to.equal('C D');
            expect(hello('E', 'C', 'D')).to.equal('E C');
        });

        it('Should partially apply multiple arguments', function () {
            var hi = ft.fn(concat).partialRight('!');
            expect(hi('John', 'Doe')).to.equal('John Doe!');
        });
    });

    describe('.repeat()', function () {
        it('Should', function () {

        });
    });    

    describe('.throttle()', function () {
        it('Should', function () {

        });
    });

    describe('.wrap()', function () {
        var add;

        before(function () {
            add = function (x, y) {
                return x + y;
            };
        });

        it('should create a wrapped function', function () {
            var wrapped = ft.fn(add).wrap(function (fn, x, y) {
                return fn(x * 2, y);
            });

            expect(wrapped(4, 5)).to.equal(13);
        });
    });
});
