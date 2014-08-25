ft.string = function (value) {
    var _string = {},
        nativeTrim = String.prototype.trim,
        nativeTrimRight = String.prototype.trimRight,
        nativeTrimLeft = String.prototype.trimLeft;

    _string.truncate = function (limit, sfx) {
        sfx = sfx || '...';
        return value.length > limit ? value = value.substring(0, limit - sfx.length) + sfx : value;
    };

    _string.trimLeft = function (chars) {
        if (!chars && nativeTrimLeft) {
            return nativeTrimLeft.call(value);
        }
        return value.replace(new RegExp('^' + chars + '+'), '');
    };

    _string.trimRight = function (chars) {
        if (!chars && nativeTrimRight) {
            return nativeTrimRight.call(value);
        }
        return value.replace(new RegExp(chars + '+$'), '');
    };

    _string.trim = function (chars) {
        if (!chars && nativeTrim) {
            return nativeTrim.call(value);
        }
        return value.replace(new RegExp('^' + chars + '+|' + chars + '+$'), '');
    };

    return _string;
};