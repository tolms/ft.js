var List = (function () {

    function List(value) {
        this._value = value;
    }

    base.extend(List.prototype, {
        at: function () {
            // TODO: Реализовать
            throw new Error();
        },

        concat: function () {
            // TODO: Реализовать ???
            throw new Error();
        },

        clone: function () {
            // TODO: Реализовать
            throw new Error();
        },

        each: function (fn, context) {
            if (!ft.is(fn).fn()) {
                throw new TypeError();
            }

            for (var i = 0, length = this._value.length; i < length; i++) {
                fn.call(context, this._value[i], i, this._value);
            }
        },

        filter: function () {
            // TODO: Реализовать
            throw new Error();
        },

        first: function () {
            // TODO: Реализовать
            throw new Error();
        },

        last: function () {
            // TODO: Реализовать
            throw new Error();
        },

        /**
         * Метод возвращает значение из замыкания.
         * Используется для завершения цепочки вызовов
         * @returns {array}
         */
        value: function () {
            return this._value;
        },

        /**
         * Метод возвращает новый список элементов длинной limit, начинающийся
         * с начала исходного списка
         * @param {number} count Длина нового списка
         * @returns {array} Новый список
         */
        take: function (count) {
            // TODO: Возвращать копию
            return this._value.slice(0, count);
        }
    });

    return List;
})();

ft.list = function (value) {
    return new List(value);
};