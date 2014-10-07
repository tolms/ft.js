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