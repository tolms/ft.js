var FunctionWrapper = (function () {
    function FunctionWrapper(value) {
        if (ft.type(value) !== 'function') {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(FunctionWrapper.prototype, {
        after: function (times) {
            var that = this;
            return function() {
                if (--times < 1) {
                    return that._value.apply(this, arguments);
                }
            };
        },

        before: function (times) {
            var that = this, memo;
            return function () {
                if (--times > 0) {
                    memo = that._value.apply(this, arguments);
                } else {
                    that._value = null;
                }
                return memo;
            };
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

        delay: function (ms) {
            var args = _.slice.call(arguments, 1),
                that = this;
            return setTimeout(function () {
                return that._value.apply(null, args);
            }, ms);
        },

        defer: function () {
            var args = ft.toArray(arguments),
                that = this;
            return setTimeout(function () {
                return that._value.apply(null, args);
            }, 1);
        },

        memoize: function () {
            var that = this,
                memos = {};
            return function () {
                var key = JSON.stringify(ft.toArray(arguments));
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
            return this.before(2);
        },

        partial: function () {
            var args = ft.toArray(arguments),
                that = this;

            return function () {
                return that._value.apply(this, args.concat(ft.toArray(arguments)));
            };
        },

        partialRight: function () {
            var args = _.slice.call(arguments),
                that = this;

            return function () {
                return that._value.apply(this, ft.toArray(arguments).concat(args));
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

        wrap: function (fn) {
            if (ft.type(fn) !== 'function') {
                throw new TypeError('Wrapper must be a function');
            }

            return ft.fn(fn).partial(this._value);
        }
    });

    return FunctionWrapper;
})();

ft.fn = function (value) {
    return new FunctionWrapper(value);
};