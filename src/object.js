var Objects = (function () {
    function Objects(value) {
        if (!ft.is(value).object()) {
            throw new TypeError();
        }

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

    Objects.prototype.create = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.has = function (key) {
        return nativeHasOwnProperty.call(this._value, key);
    };

    Objects.prototype.is = function (value, other) {
        if (value === 0 && other === 0) {
            return 1 / value === 1 / other;
        }

        if (value !== value) {
            return other !== other;
        }

        return value === other;
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

    Objects.prototype.pick = function() {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.toString = function() {
        // TODO: Реализовать
        throw new Error();
    };

    Objects.prototype.toString = function () {
        return '[object ft.Object]';
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
