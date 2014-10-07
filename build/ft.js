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
    var base = {};
    
    var objProto = Object.prototype,
        strProto = String.prototype;
    
    base.toString = objProto.toString;
    base.hasOwn = objProto.hasOwnProperty;
    base.keys = objProto.keys;
    base.trim = strProto.trim;
    base.rtrim = strProto.trimRight;
    base.ltrim = strProto.trimLeft;
    
    base.extend = function(target) {
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                if (base.hasOwn.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    };
    
    base.type = function(target) {
        if (target === undefined) {
            return 'undefined';
        }
    
        if (target === null) {
            return 'null';
        }
    
        if (target && (target.nodeType === 1 || target.nodeType === 9)) {
            return 'element';
        }
    
        var tp = base.toString.call(target).slice(8, -1).toLowerCase();
    
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
            this._negative = false;
        }
    
        base.extend(Is.prototype, {
            equal: function (other) {
                if (this._value === 0 && other === 0) {
                    return 1 / this._value === 1 / other;
                }
    
                if (this._value !== this._value) {
                    return other !== other;
                }
    
                return this._value === other;
            },
    
            args: function () {
                return base.type(this._value) === 'arguments';
            },
    
            array: function () {
                return base.type(this._value) === 'array';
            },
    
            boolean: function () {
                return base.type(this._value) === 'boolean';
            },
    
            date: function () {
                return base.type(this._value) === 'date';
            },
    
            defined: function () {
                return base.type(this._value) !== 'undefined';
            },
    
            float: function () {
                return this.number() && (this._value % 1 !== 0);
            },
    
            fn: function () {
                return base.type(this._value) === 'function';
            },
    
            int: function () {
                return this.number() && (this._value % 1 === 0);
            },
    
            nan: function () {
                return base.type(this._value) === 'nan';
            },
    
            native: function () {
                // Вернет true если переданный параметр является native code
                // TODO: Реализовать
                throw new Error();
            },
    
            not: function () {
                this._negative = true;
                return this;
            },
    
            number: function () {
                return base.type(this._value) === 'number';
            },
    
            object: function () {
                return base.type(this._value) === 'object';
            },
    
            regexp: function () {
                return base.type(this._value) === 'regexp';
            },
    
            string: function () {
                return base.type(this._value) === 'string';
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
    
        base.extend(Objects.prototype, {
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
                return base.hasOwn.call(this._value, key);
            },
    
            keys: function () {
                if (base.keys) {
                    return base.keys(this._value);
                }
                var keys = [];
                for (var key in this._value) {
                    if (base.hasOwn.call(this._value, key)) {
                        keys.push(key);
                    }
                }
                return keys;
            },
    
            pairs: function() {
                var keys = this.keys(),
                    length = keys.length,
                    i = 0,
                    pairs = [];
    
                for (; i < length; i++) {
                    pairs[i] = [keys[i], this.value[keys[i]]];
                }
                return pairs;
            },
    
            pick: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            values: function() {
                var keys = this.keys(),
                    length = keys.length,
                    i = 0,
                    values = [];
    
                for (; i < length; i++) {
                    values[i] = this._value[keys[i]];
                }
                return values;
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
    
        base.extend(List.prototype, {
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
    
            each: function (fn, context) {
                if (!ft.is(fn).fn()) {
                    throw new TypeError();
                }
    
                for (var i = 0, length = this._value.length; i < length; i++) {
                    fn.call(context, this._value[i], i, this._value);
                }
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
    
        base.extend(DateTime.prototype, {
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
    
        base.extend(Strings.prototype, {
            /**
             * Метод возвращает массив из символов, из которых состояла исходная строка
             * @returns {Array} Массив символов
             */
            chars: function () {
                return this._value.split('');
            },
    
            /**
             * Метод очищает исходную строку от дублирующихся пробелов
             * @returns {string} Очищенная строка
             */
            clean: function () {
                return this.trim().replace(/\s+/g, ' ');
            },
    
            contains: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            endsWith: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            repeat: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод разворачивает исходную строку так, что первый символ становится последним,
             * второй - предпоследним и т.д.
             * @returns {string}
             */
            reverse: function () {
                return this.chars().reverse().join('');
            },
    
            startsWith: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            trim: function (chars) {
                if (!chars && base.trim) {
                    return base.trim.call(this._value);
                }
                chars = chars || '\\s';
                return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
            },
    
            trimLeft: function (chars) {
                if (!chars && base.ltrim) {
                    return base.ltrim.call(this._value);
                }
                chars = chars || '\\s';
                return this._value.replace(new RegExp('^' + chars + '+'), '');
            },
    
            trimRight: function (chars) {
                if (!chars && base.rtrim) {
                    return base.rtrim.call(this._value);
                }
                chars = chars || '\\s';
                return this._value.replace(new RegExp(chars + '+$'), '');
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
    

    var Fn = (function () {
        function Fn(value) {
            if (!ft.is(value).fn()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        base.extend(Fn.prototype, {
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
    
            delay: function () {
                // TODO: Реализовать
                throw new Error();
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
    
        base.extend(Num.prototype, {
            method: function () {
                // TODO: Реализовать
                throw new Error();
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
    
        base.extend(Random.prototype, {
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