var Url = (function () {
    function Url(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Url.prototype, {

    });

    return Url;
})();

ft.url = function (value) {
    return new Url(value);
};