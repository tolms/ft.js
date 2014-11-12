var RandomWrapper = (function () {
    function RandomWrapper() {
    }

    _.extend(RandomWrapper.prototype, {
        id: function (prefix) {
            // TODO: Реализовать
            // Генерирует уникальный идентификатор с префиксом prefix
            throw new Error();
        }
    });

    return RandomWrapper;
})();

ft.random = function (value) {
    return new RandomWrapper(value);
};