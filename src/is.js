var Is = (function () {
    function Is(value){
        this._value = value;
    }

    /**
     * Types
     */
    Is.prototype.args = function () {
        return nativeToString.call(this._value) === '[object Arguments]';
    };

    Is.prototype.array = function () {
        return nativeToString.call(this._value) === '[object Array]';
    };

    Is.prototype.bool = function () {
        return nativeToString.call(this._value) === '[object Boolean]';
    };

    Is.prototype.date = function () {
        return nativeToString.call(this._value) === '[object Date]' || this._value instanceof Date;
    };

    Is.prototype.fn = function () {
        return nativeToString.call(this._value) === '[object Function]';
    };

    Is.prototype.number = function () {
        return nativeToString.call(this._value) === '[object Number]';
    };

    Is.prototype.regexp = function () {
        return nativeToString.call(this._value) === '[object RegExp]' || this._value instanceof RegExp;
    };

    Is.prototype.string = function () {
        return nativeToString.call(this._value) === '[object String]';
    };

    /**
     * Numbers
     */

    Is.prototype.int = function () {
        return this.number() && (this._value % 1 === 0);
    };

    Is.prototype.float = function () {
        return this.number() && (this._value % 1 !== 0);
    };

    Is.prototype.even = function () {
        return this.int() && (this._value % 2 === 0);
    };

    Is.prototype.odd = function () {
        return this.int() && (this._value % 2 !== 0);
    };

    return Is;
})();

ft.is = function (value) {
    return new Is(value);
};