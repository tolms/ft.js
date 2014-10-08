var Num = (function () {
    function Num(value) {
        if (!ft.is(value).number()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Num.prototype, {

        parseInt: function () {
            return parseInt(this._value, 10);
        },

        sign: function () {
            return this._value < 0 ? -1 : 1;
        }
    });

    return Num;
})();

ft.number = function (value) {
    return new Num(value);
};