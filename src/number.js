var NumberWrapper = (function () {
    function NumberWrapper(value) {
        if (!ft.is(value).number()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(NumberWrapper.prototype, {

        format: function () {
            // TODO: Реализовать
            throw new Error();
        },

        parseInt: function () {
            return parseInt(this._value, 10);
        },

        plural: function () {
            // TODO: Реализовать
            throw new Error();
        },

        sign: function () {
            return this._value < 0 ? -1 : 1;
        }
    });

    return NumberWrapper;
})();

ft.number = function (value) {
    return new NumberWrapper(value);
};