var DateTime = (function () {
    function DateTime(value) {
        this._value = value;
    }

    DateTime.prototype.now = function () {
        // TODO: Реализовать
        throw new Error();
    };

    return DateTime;
})();

ft.datetime = function (value) {
    return new DateTime(value);
};