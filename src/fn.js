var Fn = (function () {

    function Fn(value) {
        this._value = value;
    }

    /**
     * Метод возвращает пустую функцию заглушку
     */
    Fn.prototype.noop = function () {};

    Fn.prototype.value = function () {
        return this._value;
    };

    return Fn;
})();


ft.fn = function (value) {
    return new Fn(value);
};