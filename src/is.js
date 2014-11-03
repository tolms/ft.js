var Is = (function () {
    function Is(value) {
        this._value = value;
    }

    _.extend(Is.prototype, {
        equal: function (other) {
            return (this._value === other && (this._value !== 0 || 1 / this._value === 1 / other)) || (this._value !== this._value && other !== other);
        },

        args: function () {
            return _.type(this._value) === 'arguments';
        },

        array: function () {
            return _.type(this._value) === 'array';
        },

        boolean: function () {
            return _.type(this._value) === 'boolean';
        },

        date: function () {
            return _.type(this._value) === 'date';
        },

        defined: function () {
            return _.type(this._value) !== 'undefined';
        },

        exists: function () {
            return this.defined() && this._value !== null;
        },

        float: function () {
            return this.number() && (this._value % 1 !== 0);
        },

        fn: function () {
            return _.type(this._value) === 'function';
        },

        int: function () {
            return this.number() && (this._value % 1 === 0);
        },

        nan: function () {
            return _.type(this._value) === 'nan';
        },

        native: function () {
            // Вернет true если переданный параметр является native code
            // TODO: Реализовать
            throw new Error();
        },

        number: function () {
            return _.type(this._value) === 'number';
        },

        object: function () {
            return _.type(this._value) === 'object';
        },

        plainObject: function () {
            // TODO: Реализовать
            throw new Error();
        },

        regexp: function () {
            return _.type(this._value) === 'regexp';
        },

        string: function () {
            return _.type(this._value) === 'string';
        },

        blankString: function () {
            // TODO: Реализовать
            throw new Error();
        },

        value: function () {
            return this._value;
        }
    });

    return Is;
})();

ft.is = function (value) {
    return new Is(value);
};