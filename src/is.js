var IsWrapper = (function () {
    function IsWrapper(value) {
        this._value = value;
    }

    _.extend(IsWrapper.prototype, {
        equal: function (other) {
            return (this._value === other && (this._value !== 0 || 1 / this._value === 1 / other)) || (this._value !== this._value && other !== other);
        },

        deepEqual: function (other) {

        },

        validDate: function () {
            return ft.type(this._value) === 'date' && ft.type(this._value.getTime()) !== 'nan';
        },

        exists: function () {
            return ft.type(this._value) !== 'undefined' && this._value !== null;
        },

        float: function () {
            return ft.type(this._value) === 'number' && (this._value % 1 !== 0);
        },

        int: function () {
            return ft.type(this._value) === 'number' && (this._value % 1 === 0);
        },

        plainObject: function () {
            // TODO: Реализовать
            throw new Error();
        },

        blankString: function () {
            // TODO: Реализовать
            throw new Error();
        }
    });

    return IsWrapper;
})();

ft.is = function (value) {
    return new IsWrapper(value);
};