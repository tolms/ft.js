var Fn = (function () {
    function Fn(value) {
        if (!ft.is(value).fn()) {
            throw new TypeError();
        }

        this._value = value;
    }

    base.extend(Fn.prototype, {
        after: function () {
            // TODO: Реализовать
            throw new Error();
        },

        before: function () {
            // TODO: Реализовать
            throw new Error();
        },

        compose: function () {
            // TODO: Реализовать
            throw new Error();
        },

        curry: function () {
            // TODO: Реализовать
            throw new Error();
        },

        debounce: function () {
            // TODO: Реализовать
            throw new Error();
        },

        delay: function () {
            // TODO: Реализовать
            throw new Error();
        },

        defer: function () {
            // TODO: Реализовать
            throw new Error();
        },

        memoize: function () {
            // TODO: Реализовать
            throw new Error();
        },

        once: function () {
            // Возвращает функцию, которая вызывается один раз
            // TODO: Реализовать
            throw new Error();
        },

        partial: function () {
            // TODO: Реализовать
            throw new Error();
        },

        repeat: function () {
            // TODO: Реализовать
            // alias: times
            throw new Error();
        },

        throttle: function () {
            // TODO: Реализовать
            throw new Error();
        },

        wrap: function () {
            // TODO: Реализовать
            // alias: proxy
            throw new Error();
        }
    });

    return Fn;
})();


ft.fn = function (value) {
    return new Fn(value);
};