var IsWrapper = (function () {
    function IsWrapper(value) {
        this._value = value;
    }

    _.extend(IsWrapper.prototype, {
        /**
         * Метод определяет является ли исходная строка пустой, т. е. состоящей из пробелов или непечатных символов
         * @returns {boolean}
         */
        blankString: function () {
            if (ft.type(this._value) !== 'string') {
                throw new TypeError('Provided value is not a string!');
            }
            var value = this._value;
            return !Boolean(ft.string(value).trim().length);
        },

        emptyObject: function () {

        },

        /**
         * Метод определяет есть ли значение у переданной переменной
         * @returns {boolean}
         */
        exists: function () {
            var type = ft.type(this._value);
            return type !== 'undefined' && type !== 'null';
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

        /**
         * Метод определяет является ли исходное значение примитивным типом
         * @returns {boolean}
         */
        primitive: function () {
            var type = ft.type(this._value);
            return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || type === 'null';
        },

        /**
         * Метод определяет являет ли исходное значение валидной датой
         * @returns {boolean}
         */
        validDate: function () {
            return ft.type(this._value) === 'date' && ft.type(this._value.getTime()) !== 'nan';
        }
    });

    return IsWrapper;
})();

ft.is = function (value) {
    return new IsWrapper(value);
};