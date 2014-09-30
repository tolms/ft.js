var Is = (function () {
    function Is(value){
        this._value = value;
    }

    Is.prototype.number = function () {
        return nativeToString.call(this._value) === '[object Number]';
    };

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

//
//ft.is = function (value) {
//    // ft.is().not()....
//    var _is = {},
//        types = ['array', 'boolean', 'date', 'nan', 'null', 'number', 'object', 'regexp', 'string'],
//        check = function (o) {
//        if (o === null) {
//            return 'null';
//        }
//
//        if (o && (o.nodeType === 1 || o.nodeType === 9)) {
//            return 'element';
//        }
//
//        var s = Object.prototype.toString.call(o),
//            type = s.match(/\[object (.*?)\]/)[1].toLowerCase();
//
//        if (type === 'number') {
//            if (isNaN(o)) {
//                return 'nan';
//            }
//            if (!isFinite(o)) {
//                return 'infinity';
//            }
//        }
//
//        return type;
//    };
//
//    _is.fn = function () {
//        return check(value) === 'function';
//    };
//
//    _is.undef = function () {
//        return check(value) === 'undefined';
//    };
//
////    ft.list(types).each(function (name) {
////        _is[name] = function () {
////            return check(value) === name;
////        };
////    });
//
//    return _is;
//};