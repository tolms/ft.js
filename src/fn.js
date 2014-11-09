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
            var args = _.slice.call(arguments, 1),
                that = this;
            return setTimeout(function () {
                return that._value.apply(null, args);
            }, ms);
        },

        defer: function () {
            // TODO: Реализовать
            throw new Error();
        },

        memoize: function () {
            var that = this,
                memos = {};
            return function () {
                var key = JSON.stringify(_.slice.call(arguments));
                if (!ft.is(memos[key]).defined()) {
                    memos[key] = that._value.apply(this, arguments);
                }
                return memos[key];
            };
        },

        negate: function () {
            var that = this;
            return function () {
                return !that._value.apply(this, arguments);
            };
        },

        once: function () {
            // Возвращает функцию, которая вызывается один раз
            // TODO: Реализовать
            throw new Error();
        },

        partial: function () {
            var args = _.slice.call(arguments),
                that = this;

            return function () {
                return that._value.apply(this, args.concat(_.slice.call(arguments)));
            };
        },

        partialRight: function () {
            var args = _.slice.call(arguments),
                that = this;

            return function () {
                return that._value.apply(this, _.slice.call(arguments).concat(args));
            };
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