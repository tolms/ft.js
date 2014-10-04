var Fn = (function () {
    function Fn(value) {
        this._value = value;
    }

    Fn.prototype.after = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.before = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.compose = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.curry = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.debounce = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.delay = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.defer = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.memoize = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.once = function () {
        // Возвращает функцию, которая вызывается один раз
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.partial = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Fn.prototype.repeat = function () {
        // TODO: Реализовать
        // alias: times
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