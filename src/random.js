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

        /**
         * Возвращает псевдослучайное значение из переданного набора
         * @param  {array} list Набор значений
         * @return {*}
         */
        choice: function (list) {
            var args = (arguments.length === 1 && ft.type(list) === 'array') ? list : ft.toArray(arguments);

            return args[this.int(0, args.length - 1)];
        },

        /**
         * Возвращает псевдослучайный RGB-код 
         * @return {string}
         */
        color: function () {
            return '#' + this.hex(6);
        },

        /**
         * Возвращает псевдослучайное значение с плавающей точкой, лежащее между min и max
         * @param  {number} min Нижняя граница диапазона
         * @param  {number} max Верхняя граница диапазона
         * @param  {number} fixed Количество знаков после запятой
         * @return {number}
         */
        float: function (min, max, fixed) {
            var frac = _.random();

            min = ft.is(min).exists() ? min : MIN_INT;
            max = ft.is(max).exists() ? max : MAX_INT;

            if (min > max) {
                throw new Error('Minimum value cannot be greater than maximum value.');
            }

            return ft.toFixed(_.floor(_.random() * (max - min - frac)) + frac, fixed || 5);
        },

        /**
         * Возвращает псевдослучайный GUID (UUID v4)
         * Маска: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, 
         * где y - символ из набора [8, 9, 'a', 'b']
         * @return {string}
         */
        guid: function () {
            return this.hex(8) + '-' + this.hex(4) + '-4' + this.hex(3) + '-' + 
                this.choice(8, 9, 'a', 'b') + this.hex(3) + '-' + this.hex(12); 
        },

        /**
         * Возвращает псевдослучайное 16-ичное число в виде строки заданной длины
         * @param  {number} length Требуемая длина числа
         * @return {string}
         */     
        hex: function (length) {
            var result = '',
                letters = (HEX_LETTERS + DIGITS).split(''),
                size = letters.length;
            
            length = length && length > 0 ? length : 1;

            while (length--) {
                result += letters[this.int(0, size - 1)];
            }

            return result;
        },

        /**
         * Возвращает псевдослучайное целочисленное значение, лежащее между min и max
         * @param  {number} min Нижняя граница диапазона
         * @param  {number} max Верхняя граница диапазона
         * @return {number}
         */
        int: function (min, max) {
            min = ft.is(min).exists() ? ~~min : MIN_INT;
            max = ft.is(max).exists() ? ~~max : MAX_INT;

            if (min > max) {
                throw new Error('Minimum value cannot be greater than maximum value.');
            }

            return _.floor(_.random() * (max - min + 1) + min);
        }
    });

    return RandomWrapper;
})();

ft.random = function (value) {
    return new RandomWrapper(value);
};