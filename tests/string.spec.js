/* jshint -W030 */
describe('#string()', function () {
    describe('.append()', function () {
        it('Should append a substring', function () {
            expect(ft.string('Hello').append(', World!')).to.equal('Hello, World!');
            expect(ft.string('').append('Hi!')).to.equal('Hi!');
            expect(ft.string('').append('')).to.equal('');
            expect(ft.string('').append(undefined)).to.equal('undefined');
            expect(ft.string('').append(null)).to.equal('null');
        });
    });

    describe('.chars()', function () {
        it('Should return an array of chars', function () {
            expect(ft.string('Hello').chars()).to.deep.equal(['H', 'e', 'l', 'l', 'o']);
            expect(ft.string('').chars()).to.deep.equal([]);
            expect(ft.string(' Hello ').chars()).to.deep.equal([' ', 'H', 'e', 'l', 'l', 'o', ' ']);
        });
    });

    describe('.clean()', function () {
        it('Should remove all spaces', function () {
            expect(ft.string('           Hello,      World!             ').clean()).to.equal('Hello, World!');
            expect(ft.string('                        ').clean()).to.equal('');
        });

        it('Should remove all whitespace', function () {
            expect(ft.string('\n Hello,   \t   World!        \r     ').clean()).to.equal('Hello, World!');
            expect(ft.string('\0 \b \t \n \v \f \r').clean()).to.equal('');
        });
    });

    describe('.contains()', function () {
        it('Should return an array of chars', function () {
            expect(ft.string('Hello').chars()).to.deep.equal(['H', 'e', 'l', 'l', 'o']);
            expect(ft.string('').chars()).to.deep.equal([]);
            expect(ft.string(' Hello ').chars()).to.deep.equal([' ', 'H', 'e', 'l', 'l', 'o', ' ']);
        });
    });

    describe('.count()', function () {
        it('Should find a substring', function () {
            expect(ft.string('Hello, World!').count('l')).to.equal(3);
            expect(ft.string('Hello, World!').count('ll')).to.equal(1);
        });

        it('Should not find substring', function () {
            expect(ft.string('Hello, World!').count('world')).to.equal(0);
            expect(ft.string('Hello, World!').count('! ')).to.equal(0);
        });
    });

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

    describe('.extract()', function () {
        var url, date,
            objResult, dateResult,
            objResultPlain, dateResultPlain,
            urlPattern, datePattern,
            urlPatternPlain, datePatternPlain;

        before(function () {
            objResultPlain = {
                protocol: 'http',
                domain: 'blog.com',
                year: 2014,
                month: 12,
                day: 10,
                title: 'some-title',
                ext: 'html'
            };
            objResult = {
                url: {
                    protocol: 'http',
                    domain: 'blog.com'
                },
                date: {
                    year: 2014,
                    month: 12,
                    day: 10
                },
                info: {
                    title: 'some-title',
                    ext: 'html'
                }
            };
            urlPatternPlain = '${ protocol }://${ domain }/${ year }/${ month }/${ day }/${ title }.${ ext }';
            urlPattern = '${ url.protocol }://${ url.domain }/${ date.year }/${ date.month }/${ date.day }/${ info.title }.${ info.ext }';
            date = '10.12.2014';
            datePatternPlain = '${ day }.${ month }.${ year }';
            datePattern = '${ date.day }.${ date.month }.${ date.year }';
            url = 'http://blog.com/2014/12/10/some-title.html';
        });

        it('Should extract a plain object', function () {
            expect(ft.string(url).extract(urlPatternPlain)).to.deep.equal(objResultPlain);
            expect(ft.string(date).extract(datePatternPlain)).to.deep.equal(dateResultPlain);
        });

        it('Should extract a non-plain object', function () {
            expect(ft.string(url).extract(urlPattern)).to.deep.equal(objResult);
            expect(ft.string(date).extract(datePattern)).to.deep.equal(dateResult);
        });
    });

    describe('.inject()', function () {
        var plain, url, date, obj, plainUrl, plainDate, resultDate, resultUrl;

        before(function () {
            plain = {
                protocol: 'http',
                domain: 'blog.com',
                year: 2014,
                month: 12,
                day: 10,
                title: 'some-title',
                ext: 'html'
            };
            obj = {
                url: {
                    protocol: 'http',
                    domain: 'blog.com'
                },
                date: {
                    year: 2014,
                    month: 12,
                    day: 10
                },
                info: {
                    title: 'some-title',
                    ext: 'html'
                }
            };
            plainUrl = '${ protocol }://${ domain }/${ year }/${ month }/${ day }/${ title }.${ ext }';
            url = '${ url.protocol }://${ url.domain }/${ date.year }/${ date.month }/${ date.day }/${ info.title }.${ info.ext }';
            resultDate = '10.12.2014';
            plainDate = '${ day }.${ month }.${ year }';
            date = '${ date.day }.${ date.month }.${ date.year }';
            resultUrl = 'http://blog.com/2014/12/10/some-title.html';
        });

        it('Should inject a plain object', function () {
            expect(ft.string(plainUrl).inject(plain)).to.equal(resultUrl);
            expect(ft.string(plainDate).inject(plain)).to.equal(resultDate);
        });

        it('Should inject a non-plain object', function () {
            expect(ft.string(url).inject(obj)).to.equal(resultUrl);
            expect(ft.string(date).inject(obj)).to.equal(resultDate);
        });
    });

    describe('.insert()', function () {
        it('Should add a substring', function () {
            expect(ft.string(', World!').insert('Hello', 0)).to.equal('Hello, World!');
            expect(ft.string(', World!').insert('Hello', null)).to.equal('Hello, World!');
            expect(ft.string(', World!').insert('Hello')).to.equal('Hello, World!');
            expect(ft.string('Hello, ').insert('World!', 10)).to.equal('Hello, World!');
            expect(ft.string('Hello, Worl').insert('d!', 12)).to.equal('Hello, World!');
        });

        it('Should accept negative indexes', function () {
            expect(ft.string('Hello, Worl!').insert('d', -1)).to.equal('Hello, World!');
            expect(ft.string('o, World!').insert('Hell', -10)).to.equal('Hello, World!');
        });
    });

    describe('.prepend()', function () {
        it('Should prepend a substring', function () {
            expect(ft.string(', World!').prepend('Hello')).to.equal('Hello, World!');
            expect(ft.string('').prepend('Hi!')).to.equal('Hi!');
            expect(ft.string('').prepend('')).to.equal('');
            expect(ft.string('').prepend(undefined)).to.equal('undefined');
            expect(ft.string('').prepend(null)).to.equal('null');
        });
    });

    describe('.remove()', function () {
        var hello;

        before(function () {
            hello = 'Hello, World!';
        });

        it('Should remove a substring', function () {
            expect(ft.string(hello).remove(0, 2)).to.equal('llo, World!');
            expect(ft.string(hello).remove(0, 100)).to.equal('');
            expect(ft.string(hello).remove(0, hello.length)).to.equal('');
            expect(ft.string(hello).remove(90, 100)).to.equal('Hello, World!');
        });

        it('Should accept regular expression', function () {
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

    describe('.reverse()', function () {
        it('Should reverse a substring', function () {
            expect(ft.string('Hello, World!').reverse()).to.equal('!dlroW ,olleH');
            expect(ft.string('').reverse()).to.equal('');
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

    describe('.trim()', function () {
        it('Should remove all spaces', function () {
            expect(ft.string('           Hello, World!             ').trim()).to.equal('Hello, World!');
            expect(ft.string('                        ').trim()).to.equal('');
        });

        it('Should remove all whitespace', function () {
            expect(ft.string('\n Hello,   \t   World!        \r     ').trim()).to.equal('Hello,   \t   World!');
            expect(ft.string('\0 \b \t \nHello, World!\v \f \r').trim()).to.equal('Hello, World!');
        });
    });

    describe('.ltrim()', function () {
        it('Should remove all spaces from beginning of string', function () {
            expect(ft.string('           Hello, World!             ').ltrim()).to.equal('Hello, World!             ');
            expect(ft.string('                        ').ltrim()).to.equal('');
        });

        it('Should remove all whitespace from beginning of string', function () {
            expect(ft.string('\n Hello,   \t   World!        \r     ').ltrim()).to.equal('Hello,   \t   World!        \r     ');
            expect(ft.string('\0 \b \t \nHello, World!\v \f \r').ltrim()).to.equal('Hello, World!\v \f \r');
        });
    });

    describe('.rtrim()', function () {
        it('Should remove all spaces from end of string', function () {
            expect(ft.string('           Hello, World!             ').rtrim()).to.equal('           Hello, World!');
            expect(ft.string('                        ').rtrim()).to.equal('');
        });

        it('Should remove all whitespace from end of string', function () {
            expect(ft.string('\n Hello,   \t   World!        \r     ').rtrim()).to.equal('\n Hello,   \t   World!');
            expect(ft.string('\0 \b \t \nHello, World!\v \f \r').rtrim()).to.equal('\0 \b \t \nHello, World!');
        });
    });

    describe('.truncate()', function () {
        var str;

        before(function () {
            str = 'lorem ipsum dolor sit amet';
        });

        it('Should limit number of chars', function () {
            expect(ft.string(str).truncate(10)).to.have.length.below(11);
            expect(ft.string(str).truncate(10)).to.equal('lorem i...');

            expect(ft.string(str).truncate(14)).to.have.length.below(15);
            expect(ft.string(str).truncate(14)).to.equal('lorem ipsum...');
        });

        it('Should append string param', function () {
            var truncated = ft.string(str).truncate(10, '--');
            expect(truncated).to.have.length.below(11);
            expect(truncated).to.equal('lorem ip--');
        });

        it('Should allow cropping at full words', function () {
            expect(ft.string(str).truncate(10, null, true)).to.have.length.below(11);
            expect(ft.string(str).truncate(10, null, true)).to.equal('lorem...');

            expect(ft.string(str).truncate(14, null, true)).to.have.length.below(15);
            expect(ft.string(str).truncate(14, null, true)).to.equal('lorem ipsum...');
        });
    });
});