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