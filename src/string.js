ft.string = function (value) {
    var _string = {},
        nativeTrim = String.prototype.trim,
        nativeTrimRight = String.prototype.trimRight,
        nativeTrimLeft = String.prototype.trimLeft;

    _string.clean = function () {
        return _string.trim().replace(/\s+/g, ' ');
    };

    _string.trim = function (chars) {
        if (!chars && nativeTrim) {
            return nativeTrim.call(value);
        }
        chars = chars || '\\s';
        return value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
    };

    _string.trimLeft = function (chars) {
        if (!chars && nativeTrimLeft) {
            return nativeTrimLeft.call(value);
        }
        chars = chars || '\\s';
        return value.replace(new RegExp('^' + chars + '+'), '');
    };

    _string.trimRight = function (chars) {
        if (!chars && nativeTrimRight) {
            return nativeTrimRight.call(value);
        }
        chars = chars || '\\s';
        return value.replace(new RegExp(chars + '+$'), '');
    };

    _string.truncate = function (limit, sfx) {
        sfx = sfx || '...';
        return value.length > limit ? value = value.substring(0, limit - sfx.length) + sfx : value;
    };

    return _string;
};