/**
 * Набор общих методов
 */
var objProto = Object.prototype,
    strProto = String.prototype,
    arrayProto = Array.prototype;

var _ = {
    toString: objProto.toString,
    hasOwn: objProto.hasOwnProperty,
    keys: objProto.keys,
    trim: strProto.trim,
    rtrim: strProto.trimRight,
    ltrim: strProto.trimLeft,
    nForEach: arrayProto.forEach,
    nMap: arrayProto.map
};

_.extend = function(target) {
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            if (_.hasOwn.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

_.type = function(target) {
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

_.each = function (arr, fn, ctx) {
    if (_.type(arr) !== 'array' || !arr.length) {
        return;
    }
    if (_.nForEach) {
        _.nForEach.call(arr, fn, ctx);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (fn.call(ctx || arr[i], arr[i], i, arr) === false) {
                return;
            }
        }
    }
};

_.map = function (arr, fn, ctx) {
    if (_.type(arr) !== 'array' || !arr.length) {
        return;
    }
    if (_.nMap) {
        return _.nMap.call(arr, fn, ctx);
    } else {
        var result = [];
        _.each(arr, function(el, i, ref) {
            result.push(fn.call(ctx || this, el, i, ref));
        });
        return result;
    }
};