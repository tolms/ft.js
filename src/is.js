ft.is = function (value) {
    // ft.is().not()....
    var _is = {},
        types = ['array', 'boolean', 'date', 'nan', 'null', 'number', 'regexp', 'string'],
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