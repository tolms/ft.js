var Rand = (function () {

    function Rand(value) {
        this._value = value;
    }

    Rand.prototype.method = function () {

    };

    return Rand;
})();

ft.random = function (value) {
    return new Rand(value);
};