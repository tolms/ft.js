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

    var Obj = (function () {
        function Obj(value) {
            this._value = value;
        }
    
        Obj.prototype.keys = function () {
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
    
        Obj.prototype.has = function (key) {
            return nativeHasOwnProperty.call(this._value, key);
        };
    
        return Obj;
    })();
    
    ft.object = function (value) {
        return new Obj(value);
    };
    

    var List = (function () {
    
        function List(value) {
            this._value = value;
        }
    
        List.prototype.each = function (fn, context) {
            if (!ft.is(fn).fn()) {
                throw new TypeError();
            }
    
            for (var i = 0, length = this._value.length; i < length; i++) {
                fn.call(context, this._value[i], i, this._value);
            }
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
         * @param {number} limit Длина нового списка
         * @returns {array} Новый список
         */
        List.prototype.take = function (limit) {
            return this._value.slice(0, limit);
        };
    
        return List;
    })();
    
    ft.list = function (value) {
        return new List(value);
    };

    var Is = (function () {
        function Is(value){
            this._value = value;
        }
    
        /**
         * Types
         */
        Is.prototype.args = function () {
            return nativeToString.call(this._value) === '[object Arguments]';
        };
    
        Is.prototype.array = function () {
            return nativeToString.call(this._value) === '[object Array]';
        };
    
        Is.prototype.bool = function () {
            return nativeToString.call(this._value) === '[object Boolean]';
        };
    
        Is.prototype.date = function () {
            return nativeToString.call(this._value) === '[object Date]' || this._value instanceof Date;
        };
    
        Is.prototype.fn = function () {
            return nativeToString.call(this._value) === '[object Function]';
        };
    
        Is.prototype.number = function () {
            return nativeToString.call(this._value) === '[object Number]';
        };
    
        Is.prototype.regexp = function () {
            return nativeToString.call(this._value) === '[object RegExp]' || this._value instanceof RegExp;
        };
    
        Is.prototype.string = function () {
            return nativeToString.call(this._value) === '[object String]';
        };
    
        /**
         * Numbers
         */
    
        Is.prototype.int = function () {
            return this.number() && (this._value % 1 === 0);
        };
    
        Is.prototype.float = function () {
            return this.number() && (this._value % 1 !== 0);
        };
    
        Is.prototype.even = function () {
            return this.int() && (this._value % 2 === 0);
        };
    
        Is.prototype.odd = function () {
            return this.int() && (this._value % 2 !== 0);
        };
    
        return Is;
    })();
    
    ft.is = function (value) {
        return new Is(value);
    };

    var Str = (function () {
        function Str(value) {
            this._value = value;
        }
    
        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        Str.prototype.chars = function () {
            return this._value.split('');
        };
    
        /**
         * Метод очищает исходную строку от дублирующихся пробелов
         * @returns {string} Очищенная строка
         */
        Str.prototype.clean = function () {
            return this.trim().replace(/\s+/g, ' ');
        };
    
        /**
         * Метод разворачивает исходную строку так, что первый символ становится последним,
         * второй - предпоследним и т.д.
         * @returns {string}
         */
        Str.prototype.reverse = function () {
            return this.chars().reverse().join('');
        };
    
        Str.prototype.trim = function (chars) {
            if (!chars && nativeTrim) {
                return nativeTrim.call(value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
        };
    
        Str.prototype.trimLeft = function (chars) {
            if (!chars && nativeTrimLeft) {
                return nativeTrimLeft.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+'), '');
        };
    
        Str.prototype.trimRight = function (chars) {
            if (!chars && nativeTrimRight) {
                return nativeTrimRight.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp(chars + '+$'), '');
        };
    
        Str.prototype.truncate = function (limit, sfx) {
            sfx = sfx || '...';
            return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
        };
    
        return Str;
    })();
    
    ft.string = function (value) {
        return new Str(value);
    };
    

    var Fn = (function () {
    
        function Fn(value) {
            this._value = value;
        }
    
        /**
         * Метод возвращает пустую функцию заглушку
         */
        Fn.prototype.noop = function () {};
    
        Fn.prototype.value = function () {
            return this._value;
        };
    
        return Fn;
    })();
    
    
    ft.fn = function (value) {
        return new Fn(value);
    };

    return ft;
}));