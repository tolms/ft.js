var Objects = (function () {
    function Objects(value) {
        this._value = value;
    }

    Objects.prototype.assign = function (target, source) {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.clone = function (target, source) {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.has = function (key) {
        return nativeHasOwnProperty.call(this._value, key);
    };

    Objects.prototype.is = function () {
        // TODO: Реализовать
        throw new Error();
    };

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

    Objects.prototype.toString = function() {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.valueOf = function () {
        // TODO: Реализовать
        throw new Error();
    };

    return Objects;
})();

ft.object = function (value) {
    return new Objects(value);
};
