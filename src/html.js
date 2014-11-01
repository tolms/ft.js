var Html = (function () {
    function Html(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Html.prototype, {

        escape: function () {
            // TODO: Реализовать
            throw new Error();
        },

        prune: function () {
            // TODO: Реализовать
            throw new Error();
        },

        stripAttrs: function () {
            // TODO: Реализовать
            throw new Error();
        },

        stripTags: function () {
            // TODO: Реализовать
            throw new Error();
        },

        truncate: function (limit, sfx) {
            // TODO: Реализовать
            throw new Error();
        },

        unescape: function () {
            // TODO: Реализовать
            throw new Error();
        }
    });

    return Html;
})();

ft.html = function (value) {
    return new Html(value);
};