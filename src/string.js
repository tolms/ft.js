// = references common.js

var Strings = (function () {
    function Strings(value) {
        this._value = value;
    }

    /**
     * Метод возвращает массив из символов, из которых состояла исходная строка
     * @returns {Array} Массив символов
     */
    Strings.prototype.chars = function () {
        return this._value.split('');
    };

    /**
     * Метод очищает исходную строку от дублирующихся пробелов
     * @returns {string} Очищенная строка
     */
    Strings.prototype.clean = function () {
        return this.trim().replace(/\s+/g, ' ');
    };

    /**
     * Метод разворачивает исходную строку так, что первый символ становится последним,
     * второй - предпоследним и т.д.
     * @returns {string}
     */
    Strings.prototype.reverse = function () {
        return this.chars().reverse().join('');
    };

    Strings.prototype.trim = function (chars) {
        if (!chars && nativeTrim) {
            return nativeTrim.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
    };

    Strings.prototype.trimLeft = function (chars) {
        if (!chars && nativeTrimLeft) {
            return nativeTrimLeft.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp('^' + chars + '+'), '');
    };

    Strings.prototype.trimRight = function (chars) {
        if (!chars && nativeTrimRight) {
            return nativeTrimRight.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp(chars + '+$'), '');
    };

    Strings.prototype.truncate = function (limit, sfx) {
        sfx = sfx || '...';
        return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
    };

    return Strings;
})();

ft.string = function (value) {
    return new Strings(value);
};
