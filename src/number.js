var Num = (function () {
    function Num(value) {
        if (!ft.is(value).number()) {
            throw new TypeError();
        }

        this._value = value;
    }

    base.extend(Num.prototype, {
        method: function () {
            // TODO: Реализовать
            throw new Error();
        }
    });

    return Num;
})();

ft.number = function (value) {
    return new Num(value);
};