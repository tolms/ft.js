describe('#random()', function () {
    describe('.bool()', function () {
        it('Should return boolean', function () {
            expect(ft.type(ft.random().bool())).to.equal('boolean');
        });
    });
});