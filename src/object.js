var nativeHasOwnProperty = Object.prototype.hasOwnProperty,
    nativeKeys = Object.prototype.keys;

var Obj = (function () {
    function Obj(value) {
        this._value = value;
    }

    Obj.prototype.keys = function () {
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

    Obj.prototype.has = function (key) {
        return nativeHasOwnProperty.call(this._value, key);
    };

    return Obj;
})();

ft.object = function (value) {
    return new Obj(value);
};
