var UrlWrapper = (function () {
    function UrlWrapper(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(UrlWrapper.prototype, {

    });

    return UrlWrapper;
})();

ft.url = function (value) {
    return new UrlWrapper(value);
};