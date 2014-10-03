var DateTime = (function () {
    function DateTime(value) {
        this._value = value;
    }

    DateTime.prototype.method = function () {
        throw new Error('Empty method!');
    };

    return DateTime;
})();

ft.datetime = function (value) {
    return new DateTime(value);
};