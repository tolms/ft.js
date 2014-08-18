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