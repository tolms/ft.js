var Dates = (function () {
    function Dates(value) {
        this._value = value;
    }

    Dates.prototype.method = function () {
        throw new Error('Empty method!');
    };

    return Dates;
})();

ft.date = function (value) {
    return new Dates(value);
};