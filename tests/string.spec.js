describe('#string()', function () {
    describe('.repeat()', function () {
        var one;

        before(function () {
            one = ft.string('One!');
        });

        it('#string(\'One!\').repeat(4) should be \'One!One!One!One!\'', function () {
            expect(one.repeat(4)).to.equal('One!One!One!One!');
        });

        it('#string(\'One!\').repeat() should be empty string', function () {
            expect(one.repeat(0)).to.equal('');
        });

        it('#string(\'One!\').repeat() should be empty string', function () {
            expect(one.repeat(NaN)).to.equal('');
        });

        it('#string(\'One!\').repeat() should be empty string', function () {
            expect(one.repeat(null)).to.equal('');
        });

        it('#string(\'One!\').repeat() should be empty string', function () {
            expect(one.repeat()).to.equal('');
        });

        it('#string(\'One!\').repeat(\'2\') should be \'One!One!\'', function () {
            expect(one.repeat('2')).to.equal('One!One!');
        });
    });
});