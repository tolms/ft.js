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

        /**
         * Метод проверяет наличие ключа в объекте
         * @param key Имя ключа
         * @returns {Boolean}
         */
        has: function (key) {
            return _.has.call(this._value, key);
        },

        /**
         * Метод возвращает массив ключей исходного объекта
         * @returns {Array}
         */
        keys: function () {
            return Object.keys(this._value);
        },

        get: function (prop) {
            var obj = this._value,
                parts = prop.split('.'),
                last = parts.pop();

            while (prop = parts.shift()) {
                obj = obj[prop];
                if (!ft.is(obj).exists()) {
                    return;
                }
            }

            return obj[last];
        },

        set: function (path, value) {

        },

        /**
         * Метод возвращает массив пар ключ-значение от исходного объекта
         * @returns {Array}
         */
        pairs: function () {
            var that = this;
            return _.map(this.keys(), function (el) {
                return [el, that._value[el]];
            });
        },

        pick: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод возвращает массив значений исходного объекта
         * @returns {Array}
         */
        values: function () {
            var that = this;
            return _.map(this.keys(), function (el) {
                return that._value[el];
            });
        }
    });

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
