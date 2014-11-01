/**
 * Набор общих методов
 */
var objProto = Object.prototype,
    strProto = String.prototype,
    arrayProto = Array.prototype,
    _ = {
        toString: objProto.toString,
        has: objProto.hasOwnProperty,
        keys: objProto.keys,
        trim: strProto.trim,
        rtrim: strProto.trimRight,
        ltrim: strProto.trimLeft,
        each: arrayProto.forEach,
        map: arrayProto.map,
        slice: arrayProto.slice,
        sIndexOf: strProto.indexOf
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