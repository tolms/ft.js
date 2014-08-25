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

    ft.list = function (value) {
        var _list = {};
    
        _list.each = function (fn, context) {
            for (var i = 0, length = value.length; i < length; i++) {
                fn.call(context || this, value[i], i);
            }
        };
    
        _list.value = function () {
            return value;
        };
    
        return _list;
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
    
        ft.list(types).each(function (name) {
            _is[name] = function () {
                return check(value) === name;
            };
        });
    
        return _is;
    };

    ft.string = function (value) {
        var _string = {},
            nativeTrim = String.prototype.trim,
            nativeTrimRight = String.prototype.trimRight,
            nativeTrimLeft = String.prototype.trimLeft;
    
        _string.clean = function () {
            return _string.trim().replace(/\s+/g, ' ');
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

    ft.fn = function () {
        var _fn = {};
    
        _fn.noop = function () {};
    
        return _fn;
    };

    return ft;
}));