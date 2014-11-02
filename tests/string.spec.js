describe('#string()', function () {

    describe('.endsWith()', function () {
        var lorem;

        before(function () {
            lorem = 'Lorem ipsum dolor sit amet';
        });

        it('#string(\'Lorem ipsum dolor sit amet\').endsWith(\'amet\') - should be true', function () {
            expect(ft.string(lorem).endsWith('amet')).to.be.true;
        });

        it('#string(\'Lorem ipsum dolor sit amet\').endsWith(\'sit\') - should not be true', function () {
            expect(ft.string(lorem).endsWith('sit')).to.be.false;
        });

        it('#string(\'String is undefined\').endsWith(undefined) - should be true', function () {
            expect(ft.string('String is undefined').endsWith(undefined)).to.be.true;
        });

        it('#string(\'String is undefined\').endsWith(null) - should be false', function () {
            expect(ft.string('String is undefined').endsWith(null)).to.be.false;
        });

        it('#string(\'Value can be null\').endsWith(null) - should be true', function () {
            expect(ft.string('Value can be null').endsWith(null)).to.be.true;
        });

        it('#string(\'Also value can not be null\').endsWith(null) - should be false', function () {
            expect(ft.string('Also value can not be null').endsWith(undefined)).to.be.false;
        });

        it('#string(\'1234567890\').endsWith(890) - should be true', function () {
            expect(ft.string('1234567890').endsWith(890)).to.be.true;
        });

        it('#string(\'1234567890\').endsWith(\'\') - should be true', function () {
            expect(ft.string('1234567890').endsWith('')).to.be.true;
        });
    });

    describe('.insert()', function () {
        it('Should add a substring', function(){
            expect(ft.string(', World!').insert('Hello', 0)).to.equal('Hello, World!');
            expect(ft.string(', World!').insert('Hello', null)).to.equal('Hello, World!');
            expect(ft.string(', World!').insert('Hello')).to.equal('Hello, World!');
            expect(ft.string('Hello, ').insert('World!', 10)).to.equal('Hello, World!');
            expect(ft.string('Hello, Worl').insert('d!', 12)).to.equal('Hello, World!');
        });

        it('Should accept negative indexes', function() {
            expect(ft.string('Hello, Worl!').insert('d', -1)).to.equal('Hello, World!');
            expect(ft.string('o, World!').insert('Hell', -10)).to.equal('Hello, World!');
        });
    });

    describe('.remove()', function () {
        var hello;

        before(function () {
            hello = 'Hello, World!';
        });

        it('Should remove a substring', function(){
            expect(ft.string(hello).remove(0, 2)).to.equal('llo, World!');
            expect(ft.string(hello).remove(0, 100)).to.equal('');
            expect(ft.string(hello).remove(0, hello.length)).to.equal('');
            expect(ft.string(hello).remove(90, 100)).to.equal('Hello, World!');
        });

        it('Should accept regular expression', function() {
            expect(ft.string(hello).remove(0, -2)).to.equal('d!');
            expect(ft.string(hello).remove(0, -100)).to.equal('Hello, World!');
            expect(ft.string(hello).remove(2, -2)).to.equal('Hed!');
        });
    });

    describe('.repeat()', function () {
        var one;

        before(function () {
            one = ft.string('One!');
        });

        it('Should repeat string four times', function () {
            expect(one.repeat(4)).to.equal('One!One!One!One!');
        });

        it('Should not repeat string, should return empty string', function () {
            expect(one.repeat(0)).to.equal('');
        });

        it('Should not repeat string, should return empty string', function () {
            expect(one.repeat(NaN)).to.equal('');
        });

        it('Should not repeat string, should return empty string', function () {
            expect(one.repeat(null)).to.equal('');
        });

        it('Should not repeat string, should return empty string', function () {
            expect(one.repeat()).to.equal('');
        });

        it('Should repeat string twice', function () {
            expect(one.repeat('2')).to.equal('One!One!');
        });
    });

    describe('.startsWith()', function () {
        var lorem;

        before(function () {
            lorem = 'Lorem ipsum dolor sit amet';
        });

        it('#string(\'Lorem ipsum dolor sit amet\').startsWith(\'Lorem\') - should be true', function () {
            expect(ft.string(lorem).startsWith('Lorem')).to.be.true;
        });

        it('#string(\'Lorem ipsum dolor sit amet\').startsWith(\'sit\') - should not be true', function () {
            expect(ft.string(lorem).startsWith('sit')).to.be.false;
        });

        it('#string(\'undefined is undefined\').startsWith(undefined) - should be true', function () {
            expect(ft.string('undefined is undefined').startsWith(undefined)).to.be.true;
        });

        it('#string(\'String is undefined\').startsWith(null) - should be false', function () {
            expect(ft.string('String is undefined').startsWith(null)).to.be.false;
        });

        it('#string(\'null is not undefined\').startsWith(null) - should be true', function () {
            expect(ft.string('null is not undefined').startsWith(null)).to.be.true;
        });

        it('#string(\'Also value can not be null\').startsWith(null) - should be false', function () {
            expect(ft.string('Also value can not be null').startsWith(undefined)).to.be.false;
        });

        it('#string(\'1234567890\').startsWith(123) - should be true', function () {
            expect(ft.string('1234567890').startsWith(123)).to.be.true;
        });

        it('#string(\'1234567890\').startsWith(\'\') - should be true', function () {
            expect(ft.string('1234567890').startsWith('')).to.be.true;
        });
    });
});