var Is = (function () {
    function Is(value) {
        this._value = value;
        this._negative = false;
    }

    _.extend(Is.prototype, {
        equal: function (other) {
            if (this._value === 0 && other === 0) {
                return 1 / this._value === 1 / other;
            }

            if (this._value !== this._value) {
                return other !== other;
            }

            return this._value === other;
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

        not: function () {
            this._negative = true;
            return this;
        },

        number: function () {
            return _.type(this._value) === 'number';
        },

        object: function () {
            return _.type(this._value) === 'object';
        },

        regexp: function () {
            return _.type(this._value) === 'regexp';
        },

        string: function () {
            return _.type(this._value) === 'string';
        }
    });

    return Is;
})();

ft.is = function (value) {
    return new Is(value);
};