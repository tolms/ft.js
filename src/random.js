var Random = (function () {
    function Random() {
    }

    Random.prototype.id = function (prefix) {
        // TODO: Реализовать
        // Генерирует уникальный идентификатор с префиксом prefix
        throw new Error();
    };

    return Random;
})();

ft.random = function (value) {
    return new Random(value);
};