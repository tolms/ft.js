var Num = (function () {

    function Num(value) {
        this._value = value;
    }

    Num.prototype.method = function () {

    };

    return Num;
})();

ft.number = function (value) {
    return new Num(value);
};