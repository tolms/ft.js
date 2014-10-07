var Objects = (function () {
    function Objects(value) {
        if (!ft.is(value).object()) {
            throw new TypeError();
        }

        this._value = value;
    }

    base.extend(Objects.prototype, {
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
            return base.hasOwn.call(this._value, key);
        },

        keys: function () {
            if (base.keys) {
                return base.keys(this._value);
            }
            var keys = [];
            for (var key in this._value) {
                if (base.hasOwn.call(this._value, key)) {
                    keys.push(key);
                }
            }
            return keys;
        },

        pairs: function() {
            var keys = this.keys(),
                length = keys.length,
                i = 0,
                pairs = [];

            for (; i < length; i++) {
                pairs[i] = [keys[i], this.value[keys[i]]];
            }
            return pairs;
        },

        pick: function () {
            // TODO: Реализовать
            throw new Error();
        },

        values: function() {
            var keys = this.keys(),
                length = keys.length,
                i = 0,
                values = [];

            for (; i < length; i++) {
                values[i] = this._value[keys[i]];
            }
            return values;
        }
    });

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
