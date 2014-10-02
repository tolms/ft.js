var Dt = (function () {
    function Dt(value) {
        this._value = value;
    }

    Dt.prototype.method = function () {
        throw new Error('Empty method!');
    };

    return Dt;
})();

ft.date = function (value) {
    return new Dt(value);
};