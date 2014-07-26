(function (root, factory) {
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
            return factory();
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.ft = factory();
    }
}(this, function () {
    'use strict';

    var ft = {};

    ft.VERSION = '0.0.1';

    ft.array = function (value) {
        var _array = {
    
            each: function (fn, context) {
                for (var i = 0, length = value.length; i < length; i++) {
                    fn.call(context || this, value[i], i);
                }
            },
    
            value: function () {
                return value;
            }
        };
    
        return _array;
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
    
        ft.array(types).each(function (name) {
            _is[name] = function () {
                return check(value) === name;
            };
        });
    
        return _is;
    };

    ft.string = function (value) {
        return {
            truncate: function (limit) {
                return value.length > limit ? value = value.substring(0, limit - 3) + '...' : value;
            }
        };
    };

    ft.fn = function () {
        var _fn = {
            noop: function () {}
        };
    
        return _fn;
    };

    return ft;
}));