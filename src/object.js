var Objects = (function () {
    function Objects(value) {
        if (!ft.is(value).object()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Objects.prototype, {
        assign: function () {
            // TODO: Реализовать
            throw new Error();
        },

        clone: function () {
            // TODO: Реализовать
            throw new Error();
        },

        create: function () {
            // TODO: Реализовать
            throw new Error();
        },

        has: function (key) {
            return _.hasOwn.call(this._value, key);
        },

        keys: function () {
            if (_.keys) {
                return _.keys(this._value);
            }
            var keys = [];
            for (var key in this._value) {
                if (_.hasOwn.call(this._value, key)) {
                    keys.push(key);
                }
            }
            return keys;
        },

        pairs: function () {
            var that = this;
            return _.map(that.keys(), function (el) {
                return [el, that._value[el]];
            });
        },

        pick: function () {
            // TODO: Реализовать
            throw new Error();
        },

        values: function () {
            var that = this;
            return _.map(that.keys(), function (el) {
                return that._value[el];
            });
        }
    });

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
