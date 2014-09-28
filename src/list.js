ft.list = function (value) {
    var _list = {};

    _list.each = function (fn, context) {
        for (var i = 0, length = value.length; i < length; i++) {
            fn.call(context || this, value[i], i);
        }
    };

    /**
     * Метод возвращает новый список элементов длинной limit, начинающийся
     * с начала исходного списка
     * @param {number} limit Длина нового списка
     * @returns {array} Новый список
     */
    _list.take = function (limit) {
        return value.slice(0, limit);
    };

    /**
     * Метод возвращает значение из замыкания.
     * Используется для завершения цепочки вызовов
     * @returns {array}
     */
    _list.value = function () {
        return value;
    };

    return _list;
};