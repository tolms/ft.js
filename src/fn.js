var Fn = (function () {
    function Fn(value) {
        if (!ft.is(value).fn()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Fn.prototype, {
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

        /**
         * usage: _.fn(f).delay(500, *args)
         */
        delay: function (ms) {
            var args = _.slice.call(arguments, 1);
            return setTimeout(function () {
                return this._value.apply(null, args);
            }, ms);
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