describe('#string()', function () {
    describe('.repeat()', function () {
        it('#string().repeat()', function () {
            var one = ft.string('One!');

            expect(one.repeat(4)).to.equal('One!One!One!One!');
            expect(one.repeat(0)).to.equal('');
            expect(one.repeat(NaN)).to.equal('');
            expect(one.repeat(null)).to.equal('');
            expect(one.repeat()).to.equal('');
            expect(one.repeat('2')).to.equal('One!One!');
        });
    });
});