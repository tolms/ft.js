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

ft.type = function (target) {
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