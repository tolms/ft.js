var List = (function () {

    function List(value) {
        this._value = value;
    }

    List.prototype.each = function (fn, context) {
        for (var i = 0, length = this._value.length; i < length; i++) {
            fn.call(context, this._value[i], i, this._value);
        }
    };

    /**
     * Метод возвращает значение из замыкания.
     * Используется для завершения цепочки вызовов
     * @returns {array}
     */
    List.prototype.value = function () {
        return this._value;
    };

    /**
     * Метод возвращает новый список элементов длинной limit, начинающийся
     * с начала исходного списка
     * @param {number} limit Длина нового списка
     * @returns {array} Новый список
     */
    List.prototype.take = function (limit) {
        return this._value.slice(0, limit);
    };

    return List;
})();

ft.list = function (value) {
    return new List(value);
};