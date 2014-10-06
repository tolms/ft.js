var Is = (function () {
    function Is(value){
        this._value = value;
        this._negative = false;
    }

    Is.prototype.equal = function (other) {
        if (this._value === 0 && other === 0) {
            return 1 / this._value === 1 / other;
        }

        if (this._value !== this._value) {
            return other !== other;
        }

        return this._value === other;
    };

    Is.prototype.args = function () {
        return nativeToString.call(this._value) === '[object Arguments]';
    };

    Is.prototype.array = function () {
        return nativeToString.call(this._value) === '[object Array]';
    };

    Is.prototype.boolean = function () {
        return nativeToString.call(this._value) === '[object Boolean]';
    };

    Is.prototype.date = function () {
        return nativeToString.call(this._value) === '[object Date]' || this._value instanceof Date;
    };

    Is.prototype.defined = function () {
        return typeof this._value !== 'undefined';
    };

    Is.prototype.error = function () {
        return nativeToString.call(this._value) === '[object Error]';
    };

    Is.prototype.even = function () {
        return this.int() && (this._value % 2 === 0);
    };

    Is.prototype.float = function () {
        return this.number() && (this._value % 1 !== 0);
    };

    Is.prototype.fn = function () {
        return nativeToString.call(this._value) === '[object Function]';
    };

    Is.prototype.int = function () {
        return this.number() && (this._value % 1 === 0);
    };

    Is.prototype.nan = function () {
        return this.number() && this._value !== this._value;
    };

    Is.prototype.native = function () {
        // Вернет true если переданный параметр является native code
        // TODO: Реализовать
        throw new Error();
    };

    Is.prototype.not = function () {
        this._negative = true;
        return this;
    };

    Is.prototype.number = function () {
        return nativeToString.call(this._value) === '[object Number]';
    };

    Is.prototype.odd = function () {
        return this.int() && (this._value % 2 !== 0);
    };

    Is.prototype.object = function () {
        return nativeToString.call(this._value) === '[object Object]';
    };

    Is.prototype.propertyOf = function () {
        // TODO: Реализовать
        throw new Error();
    };

    Is.prototype.regexp = function () {
        return nativeToString.call(this._value) === '[object RegExp]' || this._value instanceof RegExp;
    };

    Is.prototype.string = function () {
        return nativeToString.call(this._value) === '[object String]';
    };

    Is.prototype.toString = function () {
        return '[object ft.Is]';
    };

    Is.prototype.valueOf = function () {
        // ??
        return !!this._value;
    };

    return Is;
})();

ft.is = function (value) {
    return new Is(value);
};