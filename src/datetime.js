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
         */
        format: function (pattern) {

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