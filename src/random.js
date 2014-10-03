var Random = (function () {
    function Random(value) {
        this._value = value;
    }

    Random.prototype.method = function () {

    };

    return Random;
})();

ft.random = function (value) {
    return new Random(value);
};