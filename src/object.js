// = references common.js

var Objects = (function () {
    function Objects(value) {
        this._value = value;
    }

    Objects.prototype.keys = function () {
        if (nativeKeys) {
            return nativeKeys(this._value);
        }
        var keys = [];
        for (var key in this._value) {
            if (this.has(key)) {
                keys.push(key);
            }
        }
        return keys;
    };

    Objects.prototype.has = function (key) {
        return nativeHasOwnProperty.call(this._value, key);
    };

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
