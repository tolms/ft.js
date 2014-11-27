var RandomWrapper = (function () {
    function RandomWrapper() {
    }

    _.extend(RandomWrapper.prototype, {
        /**
         * Возвращает псевдослучайное значение типа Boolean
         * @return {boolean}
         */
        bool: function () {
            return _.random() < 0.5;
        },

        choice: function () {

        },

        color: function () {
            return '#' + this.hex(6);
        },

        float: function () {

        },

        guid: function () {

        },

        hex: function () {

        },

        id: function (prefix) {
            // TODO: Реализовать
            // Генерирует уникальный идентификатор с префиксом prefix
            throw new Error();
        },

        int: function () {

        }
    });

    return RandomWrapper;
})();

ft.random = function (value) {
    return new RandomWrapper(value);
};