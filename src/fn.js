var Fn = (function () {

    function Fn(value) {
        this._value = value;
    }

    Fn.prototype.curry = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.debounce = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.memoize = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.throttle = function () {
        // TODO: Реализовать
        throw new Error();
    };

    return Fn;
})();


ft.fn = function (value) {
    return new Fn(value);
};