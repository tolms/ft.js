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

    describe('.repeat()', function () {
        var one;

        before(function () {
            one = ft.string('One!');
        });

        it('#string(\'One!\').repeat(4) - should be \'One!One!One!One!\'', function () {
            expect(one.repeat(4)).to.equal('One!One!One!One!');
        });

        it('#string(\'One!\').repeat() - should be empty string', function () {
            expect(one.repeat(0)).to.equal('');
        });

        it('#string(\'One!\').repeat() - should be empty string', function () {
            expect(one.repeat(NaN)).to.equal('');
        });

        it('#string(\'One!\').repeat() - should be empty string', function () {
            expect(one.repeat(null)).to.equal('');
        });

        it('#string(\'One!\').repeat() - should be empty string', function () {
            expect(one.repeat()).to.equal('');
        });

        it('#string(\'One!\').repeat(\'2\') - should be \'One!One!\'', function () {
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