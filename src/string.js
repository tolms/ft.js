var Strings = (function () {
    function Strings(value) {
        if (!ft.is(value).string()) {
            throw new TypeError();
        }

        this._value = value;
    }

    _.extend(Strings.prototype, {
        /**
         * Метод добавляет в конец исходной строки переданную
         * @param str {String} Переданная строка
         * @returns {String}
         */
        append: function (str) {
            return this._value + str;
        },

        /**
         * Метод возвращает массив из символов, из которых состояла исходная строка
         * @returns {Array} Массив символов
         */
        chars: function () {
            return this._value.split('');
        },

        /**
         * Метод очищает исходную строку от дублирующихся пробелов
         * и непечатных символов, например, \t, \n и прочих
         * @returns {string} Очищенная строка
         */
        clean: function () {
            return this.trim().replace(new RegExp('[' + _.whitespace + ']+', 'ig'), ' ');
        },

        /**
         * Метод определяет находится ли искомая строка в исходной строке
         * @param str {String} Искомая строка
         * @returns {boolean}
         */
        contains: function (str) {
            return this._value.indexOf('' + str) !== -1;
        },

        /**
         * Метод определяет количество вхождений искомой строки в исходной строке
         * @param str {String} Искомая строка
         * @returns {Number}
         */
        count: function (str) {
            str = '' + str;

            if (!str.length) {
                throw new RangeError('Search string must not be empty!');
            }

            var count = 0,
                pos = this._value.indexOf(str);
            while (pos >= 0) {
                count += 1;
                pos = this._value.indexOf(str, pos + 1);
            }
            return count;
        },

        /**
         * Метод определяет заканчивается ли исходная строка на искомую
         * @param str {String} Искомая строка
         * @returns {boolean}
         */
        endsWith: function (str) {
            str = '' + str;
            return this._value.indexOf(str, this._value.length - str.length) !== -1;
        },

        /**
         * Метод возвращает объект со значениями, полученными из исходной строки по переденной маске
         * @param pattern {String} Маска
         * @returns {Object}
         */
        extract: function (pattern) {

        },

        /**
         * Метод возвращает строку, заполненную данными из объекта data
         * @param data {Object} Данные
         * @returns {String}
         */
        inject: function (data) {
            data = ft.object(data);
            return this._value.replace(/\$\{([^${}]+?)\}/g, function (match, name) {
                var v = ft.is(data.get(ft.string(name).trim()));
                return v.number() || v.string() ? '' + v.value() : match;
            });
        },

        /**
         * Метод добавляет подстроку в исходную строку
         * @param str {String} Вставляемая подстрока
         * @param after {Number} Позиция в исходной строке, с которой будет вставлена подстрока
         * @returns {String}
         */
        insert: function (str, after) {
            after = after | 0;
            return this._value.slice(0, after) + str + this._value.slice(after);
        },

        /**
         * Метод добавляет в начало исходной строки переданную
         * @param str {String} Переданная строка
         * @returns {String}
         */
        prepend: function (str) {
            return str + this._value;
        },

        /**
         * Метод из исходной строки подстроку, начинающуюся с позиции start и заканчивающуюся позицией end
         * @param start {Number} Начальная позиция
         * @param end {Number} Конечная позиция
         * @returns {string}
         */
        remove: function (start, end) {
            start = start | 0;
            end = end | 0;

            if (start > end && start * end > 0) {
                throw new RangeError('Start index must be less than end index');
            }

            return this._value.slice(0, start) + this._value.slice(end);
        },

        /**
         * Метод создает новую строку, состоящую из count повторений исходной строки
         * @param count {Number} Количество повторений
         * @returns {string}
         */
        repeat: function (count) {
            var result = '', str = this._value;
            count = +count;

            if (count < 0) {
                throw new RangeError('Repeat count must be non-negative');
            }

            if (count === Infinity) {
                throw new RangeError('Repeat count must be less than infinity');
            }

            if (str.length * count >= 1 << 28) {
                throw new RangeError('Repeat count must not overflow maximum string size');
            }

            if (str.length === 0) {
                return result;
            }

            for (count |= 0; count > 0; count >>>= 1, str += str) {
                if ((count & 1) === 1) {
                    result += str;
                }
            }
            return result;
        },

        /**
         * Метод разворачивает исходную строку так, что первый символ становится последним,
         * второй - предпоследним и т.д.
         * @returns {string}
         */
        reverse: function () {
            return this.chars().reverse().join('');
        },

        /**
         * Метод определяет начинается ли исходная строка на искомую
         * @param str {String} Искомая строка
         * @returns {boolean}
         */
        startsWith: function (str) {
            return this._value.indexOf('' + str) === 0;
        },

        /**
         * Метод удаляет с начала и с конца исходной строки
         * @param chars {String} Удаляемые символы
         * @returns {String}
         */
        trim: function (chars) {
            chars = chars || _.whitespace;
            return this._value.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
        },

        /**
         * Метод удаляет с начала исходной строки
         * @param chars {String} Удаляемые символы
         * @returns {String}
         */
        trimLeft: function (chars) {
            chars = chars || _.whitespace;
            return this._value.replace(new RegExp('^[' + chars + ']+'), '');
        },

        /**
         * Метод удаляет с конца исходной строки
         * @param chars {String} Удаляемые символы
         * @returns {String}
         */
        trimRight: function (chars) {
            chars = chars || _.whitespace;
            return this._value.replace(new RegExp('[' + chars + ']+$'), '');
        },

        /**
         * Метод обрезает исходную строку до длины, не правышающей limit
         * @param limit {Number} Длина строки
         * @param sfx {String} Суффикс строки, по умолчанию равен '...'
         * @param safe {Boolean} Если true, то слова не будут обрезаться
         * @returns {string}
         */
        truncate: function (limit, sfx, safe) {
            var str = this.trim();
            sfx = sfx || '...';
            limit |= 0;
            limit = safe ? limit + 1 : limit;

            if (str <= limit) {
                return str;
            }

            str = str.substring(0, limit - sfx.length);

            str = safe ? str.substr(0, str.lastIndexOf(' ')) : ft.string(str).trim();

            return str + sfx;
        }
    });

    return Strings;
})();

ft.string = function (value) {
    return new Strings(value);
};
