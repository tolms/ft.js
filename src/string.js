var Str = (function () {
    function Str(value) {
        this._value = value;
    }

    /**
     * Метод возвращает массив из символов, из которых состояла исходная строка
     * @returns {Array} Массив символов
     */
    Str.prototype.chars = function () {
        return this._value.split('');
    };

    /**
     * Метод очищает исходную строку от дублирующихся пробелов
     * @returns {string} Очищенная строка
     */
    Str.prototype.clean = function () {
        return this.trim().replace(/\s+/g, ' ');
    };

    /**
     * Метод разворачивает исходную строку так, что первый символ становится последним,
     * второй - предпоследним и т.д.
     * @returns {string}
     */
    Str.prototype.reverse = function () {
        return this.chars().reverse().join('');
    };

    Str.prototype.trim = function (chars) {
        if (!chars && nativeTrim) {
            return nativeTrim.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
    };

    Str.prototype.trimLeft = function (chars) {
        if (!chars && nativeTrimLeft) {
            return nativeTrimLeft.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp('^' + chars + '+'), '');
    };

    Str.prototype.trimRight = function (chars) {
        if (!chars && nativeTrimRight) {
            return nativeTrimRight.call(this._value);
        }
        chars = chars || '\\s';
        return this._value.replace(new RegExp(chars + '+$'), '');
    };

    Str.prototype.truncate = function (limit, sfx) {
        sfx = sfx || '...';
        return this._value.length > limit ? this._value.substring(0, limit - sfx.length) + sfx : this._value;
    };

    return Str;
})();

ft.string = function (value) {
    return new Str(value);
};
