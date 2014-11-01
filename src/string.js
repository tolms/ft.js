var Strings = (function () {
    function Strings(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Strings.prototype, {
        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        chars: function () {
            return this._value.split('');
        },

        chop: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод очищает исходную строку от дублирующихся пробелов
         * и непечатных символов, например, \t, \n и прочих
         * @returns {string} Очищенная строка
         */
        clean: function () {
            return this.trim().replace(/\s+/g, ' ');
        },

        contains: function () {
            // TODO: Реализовать
            throw new Error();
        },

        endsWith: function () {
            // TODO: Реализовать
            throw new Error();
        },

        insert: function () {
            // TODO: Реализовать
            throw new Error();
        },

        prune: function () {
            // TODO: Реализовать
            throw new Error();
        },

        remove: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод создает новую строку, состоящую из count повторений исходной строки
         * @param count {Number} Количество повторений
         * @returns {string}
         */
        repeat: function (count) {
            var result = '', str = this._value;
            count = +count;

            if (count < 0) {
                throw new RangeError('Repeat count must be non-negative');
            }

            if (count === Infinity) {
                throw new RangeError('Repeat count must be less than infinity');
            }

            count |= 0;

            if (str.length === 0 || count === 0) {
                return result;
            }

            if (str.length * count >= 1 << 28) {
                throw new RangeError('Repeat count must not overflow maximum string size');
            }

            for (; count > 0; count >>>= 1, str += str) {
                if ((count & 1) === 1) {
                    result += str;
                }
            }
            return result;
        },

        /**
         * Метод разворачивает исходную строку так, что первый символ становится последним,
         * второй - предпоследним и т.д.
         * @returns {string}
         */
        reverse: function () {
            return this.chars().reverse().join('');
        },

        startsWith: function () {
            // TODO: Реализовать
            throw new Error();
        },

        supplant: function () {
            // TODO: Реализовать
            throw new Error();
        },

        trim: function (chars) {
            if (!chars && _.trim) {
                return _.trim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
        },

        trimLeft: function (chars) {
            if (!chars && _.ltrim) {
                return _.ltrim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+'), '');
        },

        trimRight: function (chars) {
            if (!chars && _.rtrim) {
                return _.rtrim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp(chars + '+$'), '');
        },

        truncate: function (limit, sfx) {
            sfx = sfx || '...';
            return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
        }
    });

    return Strings;
})();

ft.string = function (value) {
    return new Strings(value);
};
