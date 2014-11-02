(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.ft = factory();
    }
}(this, function () {
    'use strict';

    var ft = {};

    ft.VERSION = '0.0.1';

    /**
     * Набор общих методов
     */
    var objProto = Object.prototype,
        arrayProto = Array.prototype,
        _ = {
            toString: objProto.toString,
            has: objProto.hasOwnProperty,
            each: arrayProto.forEach,
            map: arrayProto.map,
            slice: arrayProto.slice,
            whitespace: '\\s\\0\\b\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
        };
    
    _.extend = function (target) {
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                if (_.has.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    };
    
    _.type = function (target) {
        if (target === undefined) {
            return 'undefined';
        }
    
        if (target === null) {
            return 'null';
        }
    
        if (target && (target.nodeType === 1 || target.nodeType === 9)) {
            return 'element';
        }
    
        var tp = _.toString.call(target).slice(8, -1).toLowerCase();
    
        if (tp === 'number') {
            if (isNaN(target)) {
                return 'nan';
            }
            if (!isFinite(target)) {
                return 'infinity';
            }
        }
    
        return tp;
    };

    var Is = (function () {
        function Is(value) {
            this._value = value;
        }
    
        _.extend(Is.prototype, {
            equal: function (other) {
                return (this._value === other && (this._value !== 0 || 1 / this._value === 1 / other)) || (this._value !== this._value && other !== other);
            },
    
            args: function () {
                return _.type(this._value) === 'arguments';
            },
    
            array: function () {
                return _.type(this._value) === 'array';
            },
    
            boolean: function () {
                return _.type(this._value) === 'boolean';
            },
    
            date: function () {
                return _.type(this._value) === 'date';
            },
    
            defined: function () {
                return _.type(this._value) !== 'undefined';
            },
    
            float: function () {
                return this.number() && (this._value % 1 !== 0);
            },
    
            fn: function () {
                return _.type(this._value) === 'function';
            },
    
            int: function () {
                return this.number() && (this._value % 1 === 0);
            },
    
            nan: function () {
                return _.type(this._value) === 'nan';
            },
    
            native: function () {
                // Вернет true если переданный параметр является native code
                // TODO: Реализовать
                throw new Error();
            },
    
            number: function () {
                return _.type(this._value) === 'number';
            },
    
            object: function () {
                return _.type(this._value) === 'object';
            },
    
            plainObject: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            regexp: function () {
                return _.type(this._value) === 'regexp';
            },
    
            string: function () {
                return _.type(this._value) === 'string';
            },
    
            blankString: function () {
                // TODO: Реализовать
                throw new Error();
            }
        });
    
        return Is;
    })();
    
    ft.is = function (value) {
        return new Is(value);
    };

    var Objects = (function () {
        function Objects(value) {
            if (!ft.is(value).object()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(Objects.prototype, {
            assign: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            clone: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            create: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            has: function (key) {
                return _.has.call(this._value, key);
            },
    
            keys: function () {
                return Object.keys(this._value);
            },
    
            pairs: function () {
                var that = this;
                return _.map(this.keys(), function (el) {
                    return [el, that._value[el]];
                });
            },
    
            pick: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            values: function () {
                var that = this;
                return _.map(this.keys(), function (el) {
                    return that._value[el];
                });
            }
        });
    
        return Objects;
    })();
    
    ft.object = function (value) {
        return new Objects(value);
    };
    

    var List = (function () {
        function List(value) {
            this._value = value;
        }
    
        _.extend(List.prototype, {
            at: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            concat: function () {
                // TODO: Реализовать ???
                throw new Error();
            },
    
            clone: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            each: function (fn, ctx) {
                // TODO: Оставить только для чейнинга
                if (!ft.is(fn).fn()) {
                    throw new TypeError();
                }
                _.each(this._value, fn, ctx);
            },
    
            filter: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            first: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            last: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            map: function (fn, ctx) {
                // TODO: Оставить только для чейнинга
                if (!ft.is(fn).fn()) {
                    throw new TypeError();
                }
                return _.map(this._value, fn, ctx);
            },
    
            /**
             * Метод возвращает значение из замыкания.
             * Используется для завершения цепочки вызовов
             * @returns {array}
             */
            value: function () {
                return this._value;
            },
    
            /**
             * Метод возвращает новый список элементов длинной limit, начинающийся
             * с начала исходного списка
             * @param {number} count Длина нового списка
             * @returns {array} Новый список
             */
            take: function (count) {
                // TODO: Возвращать копию
                return this._value.slice(0, count);
            }
        });
    
        return List;
    })();
    
    ft.list = function (value) {
        return new List(value);
    };

    var DateTime = (function () {
        function DateTime(value) {
            this._value = value;
        }
    
        _.extend(DateTime.prototype, {
            now: function () {
                // TODO: Реализовать
                throw new Error();
            }
        });
    
        return DateTime;
    })();
    
    ft.datetime = function (value) {
        return new DateTime(value);
    };

    var Strings = (function () {
        function Strings(value) {
            if (!ft.is(value).string()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(Strings.prototype, {
            /**
             * Метод добавляет в конец исходной строки переданную
             * @param str {String} Переданная строка
             * @returns {String}
             */
            append: function (str) {
                return this._value + str;
            },
    
            /**
             * Метод возвращает массив из символов, из которых состояла исходная строка
             * @returns {Array} Массив символов
             */
            chars: function () {
                return this._value.split('');
            },
    
            /**
             * Метод очищает исходную строку от дублирующихся пробелов
             * и непечатных символов, например, \t, \n и прочих
             * @returns {string} Очищенная строка
             */
            clean: function () {
                return this.trim().replace(new RegExp('[' + _.whitespace + ']+', 'ig'), ' ');
            },
    
            /**
             * Метод определяет находится ли искомая строка в исходной строке
             * @param str {String} Искомая строка
             * @returns {boolean}
             */
            contains: function (str) {
                return this._value.indexOf('' + str) !== -1;
            },
    
            /**
             * Метод определяет заканчивается ли исходная строка на искомую
             * @param str {String} Искомая строка
             * @returns {boolean}
             */
            endsWith: function (str) {
                str = '' + str;
                return this._value.indexOf(str, this._value.length - str.length) !== -1;
            },
    
            /**
             * Метод добавляет подстроку в исходную строку
             * @param str {String} Вставляемая подстрока
             * @param after {Number} Позиция в исходной строке, с которой будет вставлена подстрока
             * @returns {String}
             */
            insert: function (str, after) {
                after = after | 0;
                return this._value.slice(0, after) + str + this._value.slice(after);
            },
    
            /**
             * Метод добавляет в начало исходной строки переданную
             * @param str {String} Переданная строка
             * @returns {String}
             */
            prepend: function (str) {
                return str + this._value;
            },
    
            prune: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод из исходной строки подстроку, начинающуюся с позиции start и заканчивающуюся позицией end
             * @param start {Number} Начальная позиция
             * @param end {Number} Конечная позиция
             * @returns {string}
             */
            remove: function (start, end) {
                start = start | 0;
                end = end | 0;
    
                if (start > end && start * end > 0) {
                    throw new RangeError('Start index must be less than end index');
                }
    
                return this._value.slice(0, start) + this._value.slice(end);
            },
    
            /**
             * Метод создает новую строку, состоящую из count повторений исходной строки
             * @param count {Number} Количество повторений
             * @returns {string}
             */
            repeat: function (count) {
                var result = '', str = this._value;
                count = +count;
    
                if (count < 0) {
                    throw new RangeError('Repeat count must be non-negative');
                }
    
                if (count === Infinity) {
                    throw new RangeError('Repeat count must be less than infinity');
                }
    
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('Repeat count must not overflow maximum string size');
                }
    
                if (str.length === 0) {
                    return result;
                }
    
                for (count |= 0; count > 0; count >>>= 1, str += str) {
                    if ((count & 1) === 1) {
                        result += str;
                    }
                }
                return result;
            },
    
            /**
             * Метод разворачивает исходную строку так, что первый символ становится последним,
             * второй - предпоследним и т.д.
             * @returns {string}
             */
            reverse: function () {
                return this.chars().reverse().join('');
            },
    
            /**
             * Метод определяет начинается ли исходная строка на искомую
             * @param str {String} Искомая строка
             * @returns {boolean}
             */
            startsWith: function (str) {
                return this._value.indexOf('' + str) === 0;
            },
    
            supplant: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод удаляет с начала и с конца исходной строки
             * @param chars {String} Удаляемые символы
             * @returns {String}
             */
            trim: function (chars) {
                chars = chars || _.whitespace;
                return this._value.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
            },
    
            /**
             * Метод удаляет с начала исходной строки
             * @param chars {String} Удаляемые символы
             * @returns {String}
             */
            ltrim: function (chars) {
                chars = chars || _.whitespace;
                return this._value.replace(new RegExp('^[' + chars + ']+'), '');
            },
    
            /**
             * Метод удаляет с конца исходной строки
             * @param chars {String} Удаляемые символы
             * @returns {String}
             */
            rtrim: function (chars) {
                chars = chars || _.whitespace;
                return this._value.replace(new RegExp('[' + chars + ']+$'), '');
            },
    
            truncate: function (limit, sfx) {
                sfx = sfx || '...';
                return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
            }
        });
    
        return Strings;
    })();
    
    ft.string = function (value) {
        return new Strings(value);
    };
    

    var Html = (function () {
        function Html(value) {
            if (!ft.is(value).string()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(Html.prototype, {
    
            escape: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            prune: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            stripAttrs: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            stripTags: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            truncate: function (limit, sfx) {
                // TODO: Реализовать
                throw new Error();
            },
    
            unescape: function () {
                // TODO: Реализовать
                throw new Error();
            }
        });
    
        return Html;
    })();
    
    ft.html = function (value) {
        return new Html(value);
    };

    var Fn = (function () {
        function Fn(value) {
            if (!ft.is(value).fn()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(Fn.prototype, {
            after: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            before: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            compose: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            curry: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            debounce: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * usage: _.fn(f).delay(500, *args)
             */
            delay: function (ms) {
                var args = _.slice.call(arguments, 1);
                return setTimeout(function () {
                    return this._value.apply(null, args);
                }, ms);
            },
    
            defer: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            memoize: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            once: function () {
                // Возвращает функцию, которая вызывается один раз
                // TODO: Реализовать
                throw new Error();
            },
    
            partial: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            repeat: function () {
                // TODO: Реализовать
                // alias: times
                throw new Error();
            },
    
            throttle: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            wrap: function () {
                // TODO: Реализовать
                // alias: proxy
                throw new Error();
            }
        });
    
        return Fn;
    })();
    
    ft.fn = function (value) {
        return new Fn(value);
    };

    var Num = (function () {
        function Num(value) {
            if (!ft.is(value).number()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(Num.prototype, {
    
            format: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            parseInt: function () {
                return parseInt(this._value, 10);
            },
    
            plural: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            sign: function () {
                return this._value < 0 ? -1 : 1;
            }
        });
    
        return Num;
    })();
    
    ft.number = function (value) {
        return new Num(value);
    };

    var Random = (function () {
        function Random() {
        }
    
        _.extend(Random.prototype, {
            id: function (prefix) {
                // TODO: Реализовать
                // Генерирует уникальный идентификатор с префиксом prefix
                throw new Error();
            }
        });
    
        return Random;
    })();
    
    ft.random = function (value) {
        return new Random(value);
    };

    return ft;
}));