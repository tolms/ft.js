var DateTimeWrapper = (function () {
    function DateTimeWrapper(dt) {
        var $dt = ft.is(dt);
        if (!$dt.date() && $dt.validDate()) {
            throw new TypeError();
        }

        this._date = {
            year: dt.getFullYear(),
            month: dt.getMonth() + 1, // Январь будет иметь номер 1
            day: dt.getDate(),
            hours: dt.getHours(),
            minutes: dt.getMinutes(),
            seconds: dt.getSeconds(),
            ms: dt.getMilliseconds()
        };
    }

    _.extend(DateTimeWrapper.prototype, {
        /**
         * Форматирует исходную дату в строку согласно переданному паттерну
         * @param pattern {String} Паттерн
         * @returns {String}
         *
         * YYYY - Номер года в виде четырехзначного числа (0900, 2014)
         * YYY - Номер года в виде минимум трехзначного числа (900, 2014)
         * YY - Номер года в виде двузначного числа с ведущим нулем (00, 14)
         * Y - Номе года в виде двузначного числа без ведущего нуля (0, 14)
         * 
         * MMMM - Полном имя месяца (от January до December)
         * MMM - Сокращенное имя месяца (от Jan. до Dec.)
         * MM - Номер месяца с ведущим нулем (от 01 до 12)
         * M - Номер месяца без ведущего нуля (от 1 до 12)
         *
         * DDDD - Полное название дня недели (от Monday до Sunday)
         * DDD - Сокращенное название дня недели (от Mon. до Sun.)
         * DD - Номер дня недели с ведущим нулем (от 01 до 31)
         * D - Номер дня недели без ведущего нуля (от 1 до 31)
         *
         * HH - Номер текущего часа в 24-часовом формате с ведушим нулем (от 00 до 24)
         * H - Номер текущего часа в 24-часовом формате без ведушего нуля (от 0 до 24)
         * hh - Номер текущего часа в 12-часовом формате с ведушим нулем (от 00 до 12)
         * h - Номер текущего часа в 12-часовом формате без ведушего нуля (от 0 до 12)
         *
         * mm - Номер текущей минуты с ведущим нулем (от 00 до 59)
         * m - Номер текущей минуты без ведущего нуля (от 0 до 59)
         *
         * ss - Номер текущей секунды с ведущим нулем (от 00 до 59)
         * s - Номер текущей секунды без ведушего нуля (от 0 до 59)
         *
         * f* - Доли секунды. f - десятая, ff - сотая, fff - тысячная и так далее.
         * 
         * TT - Указатель AM/PM
         * tt - Указатель am/pm
         *
         * Z - Часовой сдвиг
         */
        format: function (pattern) {
            if (!ft.is(pattern).exists()) {
                throw new TypeError('Pattern must be defined!');
            }

            if (ft.type(pattern) !== 'string') {
                throw new TypeError('Pattern must be a string!');
            }

            if (pattern.length === 0) {
                return '';
            }


        },

        value: function () {
            return new Date(this._date.year, this._date.month - 1, this._date.day, this._date.hours, this._date.minutes, this._date.seconds, this._date.ms);
        }
    });

    return DateTimeWrapper;
})();

ft.datetime = function (value) {
    return new DateTimeWrapper(value);
};