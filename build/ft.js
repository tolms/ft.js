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

    ft.is = function (value) {
        // ft.is().not()....
        var _is = {},
            types = ['array', 'boolean', 'date', 'nan', 'null', 'number', 'object', 'regexp', 'string'],
            check = function (o) {
            if (o === null) {
                return 'null';
            }
    
            if (o && (o.nodeType === 1 || o.nodeType === 9)) {
                return 'element';
            }
    
            var s = Object.prototype.toString.call(o),
                type = s.match(/\[object (.*?)\]/)[1].toLowerCase();
    
            if (type === 'number') {
                if (isNaN(o)) {
                    return 'nan';
                }
                if (!isFinite(o)) {
                    return 'infinity';
                }
            }
    
            return type;
        };
    
        _is.fn = function () {
            return check(value) === 'function';
        };
    
        _is.undef = function () {
            return check(value) === 'undefined';
        };
    
    //    ft.list(types).each(function (name) {
    //        _is[name] = function () {
    //            return check(value) === name;
    //        };
    //    });
    
        return _is;
    };

    ft.string = function (value) {
        var _string = {},
            nativeTrim = String.prototype.trim,
            nativeTrimRight = String.prototype.trimRight,
            nativeTrimLeft = String.prototype.trimLeft;
    
        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        _string.chars = function () {
            return value.split('');
        };
    
        /**
         * Метод очищает исходную строку от дублирующихся пробелов
         * @returns {string} Очищенная строка
         */
        _string.clean = function () {
            return _string.trim().replace(/\s+/g, ' ');
        };
    
        /**
         * Метод разворачивает исходную строку так, что первый символ становится последним,
         * второй - предпоследним и т.д.
         * @returns {string}
         */
        _string.reverse = function () {
            return _string.chars().reverse().join('');
        };
    
        _string.trim = function (chars) {
            if (!chars && nativeTrim) {
                return nativeTrim.call(value);
            }
            chars = chars || '\\s';
            return value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
        };
    
        _string.trimLeft = function (chars) {
            if (!chars && nativeTrimLeft) {
                return nativeTrimLeft.call(value);
            }
            chars = chars || '\\s';
            return value.replace(new RegExp('^' + chars + '+'), '');
        };
    
        _string.trimRight = function (chars) {
            if (!chars && nativeTrimRight) {
                return nativeTrimRight.call(value);
            }
            chars = chars || '\\s';
            return value.replace(new RegExp(chars + '+$'), '');
        };
    
        _string.truncate = function (limit, sfx) {
            sfx = sfx || '...';
            return value.length > limit ? value = value.substring(0, limit - sfx.length) + sfx : value;
        };
    
        return _string;
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