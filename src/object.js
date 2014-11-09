/* jshint -W084 */
var Objects = (function () {
    function Objects(value) {
        if (!ft.is(value).object()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Objects.prototype, {
        clone: function () {
            // TODO: Реализовать
            throw new Error();
        },

        create: function () {
            // TODO: Реализовать
            throw new Error();
        },

        defaults: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод возвращает значение свойства объекта
         * @param prop {String} Имя свойства объекта или путь <prop>.<prop1>.<prop2>...<propN>
         * @returns {*}
         */
        get: function (prop) {
            if (!ft.is(prop).string()) {
                return;
            }

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

        /**
         * Метод проверяет наличие ключа в объекте
         * @param key Имя ключа
         * @returns {Boolean}
         */
        has: function (key) {
            return _.has.call(this._value, key);
        },

        /**
         * Метод возвращает объект, в котором все значения исходного объекта
         * стали ключами, а ключи - значениями
         * @returns {Object}
         */
        invert: function () {
            var result = {};

            _.each.call(this.keys(), function (el) {
                result[this._value[el]] = el;
            }, this);

            return result;
        },

        /**
         * Метод возвращает массив ключей исходного объекта
         * @returns {Array}
         */
        keys: function () {
            return Object.keys(this._value);
        },

        merge: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод создает пространство имен в исходном объекте
         * и создает вложенные объекты согласно переданному пути
         * @param path {String} Путь
         */
        namespace: function (path) {
            var obj = this._value;
            _.each.call(path.split('.'), function (key) {
                if (!ft.is(obj[key]).defined()) {
                    obj[key] = {};
                }
                if (ft.is(obj[key]).object()) {
                    obj = obj[key];
                } else {
                    throw new RangeError('Property already exists and is not an object.');
                }
            });
            return obj;
        },

        /**
         * Метод возвращает копию объекта без переданных в метод ключей.
         * Ключ может представлять собой путь к свойству.
         * @returns {Object}
         */
        omit: function (keys, ctx) {
            var isKeys = ft.is(keys),
                list,
                fn;

            if (isKeys.array()) {
                list = ft.list(keys);
                fn = function (key) {
                    return !list.contains(key);
                };
            }

            if (isKeys.fn()) {
                fn = ft.fn(keys).negate();
            }

            return this.pick(fn, ctx);
        },

        /**
         * Метод возвращает массив пар ключ-значение от исходного объекта
         * @returns {Array}
         */
        pairs: function () {
            var that = this;
            return _.map.call(this.keys(), function (el) {
                return [el, that._value[el]];
            });
        },

        /**
         * Метод возвращает копию объекта с ключами, переданными в метод.
         * Ключ может представлять собой путь к свойству.
         * @returns {Object}
         */
        pick: function (keys, ctx) {
            var result = {},
                key,
                isKeys = ft.is(keys);

            if (isKeys.array()) {
                _.each.call(keys, function (key) {
                    if (this.has(key)) {
                        result[key] = this._value[key];
                    }
                }, this);
            }

            if (isKeys.fn()) {
                for (key in this._value) {
                    if (this.has(key) && keys.call(ctx, key, this._value[key])) {
                        result[key] = this._value[key];
                    }
                }
            }

            return result;
        },

        /**
         * Метод возвращает значение ключа
         * @param key {String} Ключ или путь
         * @returns {*}
         */
        result: function (key) {
            var prop = this.get(key),
                $prop = ft.is(prop);

            if (!$prop.defined()) {
                return;
            }

            return $prop.fn() ? prop.call(this._value) : prop;
        },

        set: function (path, value) {
            // TODO: Реализовать
            throw new Error();
        },

        template: function () {

        },

        /**
         * Метод возвращает массив значений исходного объекта
         * @returns {Array}
         */
        values: function () {
            var that = this;
            return _.map.call(this.keys(), function (el) {
                return that._value[el];
            });
        }
    });

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
