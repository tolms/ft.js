var Time = (function () {

    function Time(value) {
        this._value = value;
    }

    Time.prototype.method = function () {

    };

    return Time;
})();

ft.time = function (value) {
    return new Time(value);
};