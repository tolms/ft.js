var DateTimeWrapper = (function () {
    function DateTimeWrapper(value) {
        this._value = value;
    }

    _.extend(DateTimeWrapper.prototype, {
        now: function () {
            // TODO: Реализовать
            throw new Error();
        }
    });

    return DateTimeWrapper;
})();

ft.datetime = function (value) {
    return new DateTimeWrapper(value);
};