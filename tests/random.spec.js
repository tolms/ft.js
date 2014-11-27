describe('#random()', function () {
    describe('.bool()', function () {
        it('Should return boolean', function () {
            expect(ft.type(ft.random().bool())).to.equal('boolean');
        });
    });
    
    describe('.choice()', function () {
        var list = [1, 2, 3], 
            random = ft.random(),
            choice;

        before(function () {
            firstChoice = random.choice(list);
            secondChoice = random.choice(list);

            firstApplyChoice = random.choice.apply(random, list);
            secondApplyChoice = random.choice.apply(random, list);            
        });

        it('Should pick a random item from list', function () {
            expect(list).to.contain(firstChoice);
            expect(list).to.contain(secondChoice);
        });

        it('Should pick a random item from arguments', function () {
            expect(list).to.contain(firstApplyChoice);
            expect(list).to.contain(secondApplyChoice);
        });
    });

    describe('.color()', function () {
        var color;

        before(function () {
            color = ft.random().color();
        });

        it('Color should be color', function () {
            expect(color).to.match(/^\#(?:[0-9a-fA-F]{6})$/);
        });
    });

    describe('.float()', function () {
        var float, range;

        before(function () {
            float = ft.random().float();
            range = ft.random().float(0.113, 94.378);
        });

        it('Should return a float', function () {
            expect(ft.is(float).float()).to.equal(true);
        });

        it('Should return an float inside range', function () {
            expect(range > 0.113 && range < 94.378).to.equal(true);
        });
    });

    describe('.guid()', function () {
        var guid;

        before(function () {
            guid = ft.random().guid();
        });

        it('Guid should be guid', function () {
            expect(guid).to.match(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
        });
    });

    describe('.hex()', function () {
        var hex, hex12;

        before(function () {
            hex = ft.random().hex();
            hex12 = ft.random().hex(12);
        });

        it('Should return a string', function () {
            expect(ft.type(hex)).to.equal('string');
            expect(ft.type(hex12)).to.equal('string');

            expect(hex.length).to.equal(1);
            expect(hex12.length).to.equal(12);
        });

        it('Hex should be a hex', function () {
            expect(hex).to.match(/[a-f0-9]+/); 
            expect(hex12).to.match(/[a-f0-9]+/); 
        });
    });

    describe('.int()', function () {
        var int, range;

        before(function () {
            int = ft.random().int();
            range = ft.random().int(0, 1000);
        });

        it('Should return a integer', function () {
            expect(ft.is(int).int()).to.equal(true);
        });

        it('Should return an integer inside range', function () {
            expect(range > 0 && range < 1000).to.equal(true);
        });
    });
});