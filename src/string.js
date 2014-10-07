var Strings = (function () {
    function Strings(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    base.extend(Strings.prototype, {
        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        chars: function () {
            return this._value.split('');
        },

        /**
         * Метод очищает исходную строку от дублирующихся пробелов
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

        repeat: function () {
            // TODO: Реализовать
            throw new Error();
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

        trim: function (chars) {
            if (!chars && base.trim) {
                return base.trim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
        },

        trimLeft: function (chars) {
            if (!chars && base.ltrim) {
                return base.ltrim.call(this._value);
            }
            chars = chars || '\\s';
            return this._value.replace(new RegExp('^' + chars + '+'), '');
        },

        trimRight: function (chars) {
            if (!chars && base.rtrim) {
                return base.rtrim.call(this._value);
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
