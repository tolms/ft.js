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
        random: Math.random, 
        floor: Math.floor
    },
    MAX_INT = 2147483647, //Maximum 32-bit signed integer value. (2^31 - 1)
    MIN_INT = -MAX_INT,
    DIGITS = '0123456789',
    HEX_LETTERS = 'abcdef';

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

/**
 * Метод возвращает тип переданного значения в виде строки
 * @param target {*} Значение, для которого определяется тип
 * @returns {string}
 */
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

ft.equal = function (target, other) {
    return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
};

/**
 * Возвращают переданные args в виде массива
 * @param {array-like} args аргументы
 * @return {array}
 */
ft.toArray = function (args) {
    return _.slice.call(args);
}

ft.toFixed = function (num, fixed) {
    return parseFloat(num.toFixed(fixed));
}