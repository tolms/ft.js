var Num = (function () {
    function Num(value) {
        if (!ft.is(value).number()) {
            throw new TypeError();
        }

        this._value = value;
    }

    Num.prototype.method = function () {

    };

    return Num;
})();

ft.number = function (value) {
    return new Num(value);
};