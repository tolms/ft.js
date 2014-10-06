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
        strProto = String.prototype;
    
    var nativeToString = objProto.toString,
        nativeHasOwnProperty = objProto.hasOwnProperty,
        nativeKeys = objProto.keys,
        nativeTrim = strProto.trim,
        nativeTrimRight = strProto.trimRight,
        nativeTrimLeft = strProto.trimLeft;

    var Is = (function () {
        function Is(value){
            this._value = value;
            this._negative = false;
        }
    
        Is.prototype.equal = function (other) {
            if (this._value === 0 && other === 0) {
                return 1 / this._value === 1 / other;
            }
    
            if (this._value !== this._value) {
                return other !== other;
            }
    
            return this._value === other;
        };
    
        Is.prototype.args = function () {
            return nativeToString.call(this._value) === '[object Arguments]';
        };
    
        Is.prototype.array = function () {
            return nativeToString.call(this._value) === '[object Array]';
        };
    
        Is.prototype.boolean = function () {
            return nativeToString.call(this._value) === '[object Boolean]';
        };
    
        Is.prototype.date = function () {
            return nativeToString.call(this._value) === '[object Date]' || this._value instanceof Date;
        };
    
        Is.prototype.defined = function () {
            return typeof this._value !== 'undefined';
        };
    
        Is.prototype.error = function () {
            return nativeToString.call(this._value) === '[object Error]';
        };
    
        Is.prototype.even = function () {
            return this.int() && (this._value % 2 === 0);
        };
    
        Is.prototype.float = function () {
            return this.number() && (this._value % 1 !== 0);
        };
    
        Is.prototype.fn = function () {
            return nativeToString.call(this._value) === '[object Function]';
        };
    
        Is.prototype.int = function () {
            return this.number() && (this._value % 1 === 0);
        };
    
        Is.prototype.nan = function () {
            return this.number() && this._value !== this._value;
        };
    
        Is.prototype.native = function () {
            // Вернет true если переданный параметр является native code
            // TODO: Реализовать
            throw new Error();
        };
    
        Is.prototype.not = function () {
            this._negative = true;
            return this;
        };
    
        Is.prototype.number = function () {
            return nativeToString.call(this._value) === '[object Number]';
        };
    
        Is.prototype.odd = function () {
            return this.int() && (this._value % 2 !== 0);
        };
    
        Is.prototype.object = function () {
            return nativeToString.call(this._value) === '[object Object]';
        };
    
        Is.prototype.propertyOf = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Is.prototype.regexp = function () {
            return nativeToString.call(this._value) === '[object RegExp]' || this._value instanceof RegExp;
        };
    
        Is.prototype.string = function () {
            return nativeToString.call(this._value) === '[object String]';
        };
    
        Is.prototype.toString = function () {
            return '[object ft.Is]';
        };
    
        Is.prototype.valueOf = function () {
            // ??
            return !!this._value;
        };
    
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
    
        Objects.prototype.assign = function (target, source) {
            // TODO: Реализовать
            throw new Error();
        };
    
        Objects.prototype.clone = function (target, source) {
            // TODO: Реализовать
            throw new Error();
        };
    
        Objects.prototype.create = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Objects.prototype.has = function (key) {
            return nativeHasOwnProperty.call(this._value, key);
        };
    
        Objects.prototype.keys = function () {
            if (nativeKeys) {
                return nativeKeys(this._value);
            }
            var keys = [];
            for (var key in this._value) {
                if (this.has(key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    
        Objects.prototype.pick = function() {
            // TODO: Реализовать
            throw new Error();
        };
    
        Objects.prototype.toString = function () {
            return '[object ft.Object]';
        };
    
        Objects.prototype.valueOf = function () {
            return this._value;
        };
    
        return Objects;
    })();
    
    ft.object = function (value) {
        return new Objects(value);
    };
    

    var List = (function () {
    
        function List(value) {
            this._value = value;
        }
    
        List.prototype.at = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        List.prototype.concat = function () {
            // TODO: Реализовать ???
            throw new Error();
        };
    
        List.prototype.clone = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        List.prototype.each = function (fn, context) {
            if (!ft.is(fn).fn()) {
                throw new TypeError();
            }
    
            for (var i = 0, length = this._value.length; i < length; i++) {
                fn.call(context, this._value[i], i, this._value);
            }
        };
    
        List.prototype.filter = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        List.prototype.first = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        List.prototype.last = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        /**
         * Метод возвращает значение из замыкания.
         * Используется для завершения цепочки вызовов
         * @returns {array}
         */
        List.prototype.value = function () {
            return this._value;
        };
    
        /**
         * Метод возвращает новый список элементов длинной limit, начинающийся
         * с начала исходного списка
         * @param {number} count Длина нового списка
         * @returns {array} Новый список
         */
        List.prototype.take = function (count) {
            // TODO: Возвращать копию
            return this._value.slice(0, count);
        };
    
        List.prototype.toString = function () {
            return '[object ft.List]';
        };
    
        return List;
    })();
    
    ft.list = function (value) {
        return new List(value);
    };

    var DateTime = (function () {
        function DateTime(value) {
            this._value = value;
        }
    
        DateTime.prototype.now = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        DateTime.prototype.toString = function () {
            return '[object ft.DateTime]';
        };
    
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
    
        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        Strings.prototype.chars = function () {
            return this._value.split('');
        };
    
        /**
         * Метод очищает исходную строку от дублирующихся пробелов
         * @returns {string} Очищенная строка
         */
        Strings.prototype.clean = function () {
            return this.trim().replace(/\s+/g, ' ');
        };
    
        Strings.prototype.contains = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Strings.prototype.endsWith = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Strings.prototype.repeat = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        /**
         * Метод разворачивает исходную строку так, что первый символ становится последним,
         * второй - предпоследним и т.д.
         * @returns {string}
         */
        Strings.prototype.reverse = function () {
            return this.chars().reverse().join('');
        };
    
        Strings.prototype.startsWith = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Strings.prototype.trim = function (chars) {
            if (!chars && nativeTrim) {
                return nativeTrim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
        };
    
        Strings.prototype.trimLeft = function (chars) {
            if (!chars && nativeTrimLeft) {
                return nativeTrimLeft.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+'), '');
        };
    
        Strings.prototype.trimRight = function (chars) {
            if (!chars && nativeTrimRight) {
                return nativeTrimRight.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp(chars + '+$'), '');
        };
    
        Strings.prototype.truncate = function (limit, sfx) {
            sfx = sfx || '...';
            return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
        };
    
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
    
        Fn.prototype.after = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.before = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.compose = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.curry = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.debounce = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.delay = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.defer = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.memoize = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.once = function () {
            // Возвращает функцию, которая вызывается один раз
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.partial = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.repeat = function () {
            // TODO: Реализовать
            // alias: times
            throw new Error();
        };
    
        Fn.prototype.throttle = function () {
            // TODO: Реализовать
            throw new Error();
        };
    
        Fn.prototype.wrap = function () {
            // TODO: Реализовать
            // alias: proxy
            throw new Error();
        };
    
        Fn.prototype.toString = function () {
            return '[object ft.Fn]';
        };
    
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
    
        Num.prototype.method = function () {
    
        };
    
        Num.prototype.toString = function () {
            return '[object ft.Number]';
        };
    
        return Num;
    })();
    
    ft.number = function (value) {
        return new Num(value);
    };

    var Random = (function () {
        function Random() {
        }
    
        Random.prototype.id = function (prefix) {
            // TODO: Реализовать
            // Генерирует уникальный идентификатор с префиксом prefix
            throw new Error();
        };
    
        Random.prototype.toString = function () {
            return '[object ft.Random]';
        };
    
        return Random;
    })();
    
    ft.random = function (value) {
        return new Random(value);
    };

    return ft;
}));