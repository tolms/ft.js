(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.ft = factory();
    }
}(this, function () {
    'use strict';

    var ft = {};

    ft.VERSION = '0.0.1';

    ft.settings = {
        whitespace: '\\s\\0\\b\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
    };

    /**
     * Набор общих методов
     */
    var objProto = Object.prototype,
        arrayProto = Array.prototype,
        _ = {
            toString: objProto.toString,
            has: objProto.hasOwnProperty,
            each: arrayProto.forEach,
            map: arrayProto.map,
            slice: arrayProto.slice,
            random: Math.random, 
            floor: Math.floor
        },
        MAX_INT = 2147483647, //Maximum 32-bit signed integer value. (2^31 - 1)
        MIN_INT = -MAX_INT,
        DIGITS = '0123456789',
        HEX_LETTERS = 'abcdef';
    
    _.extend = function (target) {
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                if (_.has.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    };
    
    /**
     * Метод возвращает тип переданного значения в виде строки
     * @param target {*} Значение, для которого определяется тип
     * @returns {string}
     */
    ft.type = function (target) {
        if (target === undefined) {
            return 'undefined';
        }
    
        if (target === null) {
            return 'null';
        }
    
        if (target && (target.nodeType === 1 || target.nodeType === 9)) {
            return 'element';
        }
    
        var tp = _.toString.call(target).slice(8, -1).toLowerCase();
    
        if (tp === 'number') {
            if (isNaN(target)) {
                return 'nan';
            }
            if (!isFinite(target)) {
                return 'infinity';
            }
        }
    
        return tp;
    };
    
    ft.equal = function (target, other) {
        return (target === other && (target !== 0 || 1 / target === 1 / other)) || (target !== target && other !== other);
    };
    
    /**
     * Возвращают переданные args в виде массива
     * @param {array-like} args аргументы
     * @return {array}
     */
    ft.toArray = function (args) {
        return _.slice.call(args);
    }
    
    ft.toFixed = function (num, fixed) {
        return parseFloat(num.toFixed(fixed));
    }

    var IsWrapper = (function () {
        function IsWrapper(value) {
            this._value = value;
        }
    
        _.extend(IsWrapper.prototype, {
            /**
             * Метод определяет является ли исходная строка пустой, т. е. состоящей из пробелов или непечатных символов
             * @returns {boolean}
             */
            blankString: function () {
                if (ft.type(this._value) !== 'string') {
                    throw new TypeError('Provided value is not a string!');
                }
                var value = this._value;
                return !Boolean(ft.string(value).trim().length);
            },
    
            /**
             * Метод определяет является ли исходный объект пустым, то есть
             * неимеющим собственных ключей
             * @return {boolean}
             */
            emptyObject: function () {
                for (var key in this._value) {
                    if (_.has.call(this._value, key)) {
                        return false;
                    }
                }
                return true;
            },
    
            /**
             * Метод определяет есть ли значение у переданной переменной
             * @returns {boolean}
             */
            exists: function () {
                var type = ft.type(this._value);
                return type !== 'undefined' && type !== 'null';
            },
    
            /**
             * Метод определяет есть ли у исходного значения дробная часть
             * @return {boolean}
             */
            float: function () {
                return ft.type(this._value) === 'number' && (this._value % 1 !== 0);
            },
    
            /**
             * Метод определяет является ли исходное значение целочисленным
             * @return {boolean}
             */
            int: function () {
                return ft.type(this._value) === 'number' && (this._value % 1 === 0);
            },
    
            /**
             * Метод определяет является ли исходный объект плоским, то есть
             * объектом, чьи свойства не являются объектами
             * @return {boolean}
             */
            plainObject: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод определяет является ли исходное значение примитивным типом
             * @returns {boolean}
             */
            primitive: function () {
                var type = ft.type(this._value);
                return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || type === 'null';
            },
    
            /**
             * Метод определяет являет ли исходное значение валидной датой
             * @returns {boolean}
             */
            validDate: function () {
                return ft.type(this._value) === 'date' && ft.type(this._value.getTime()) !== 'nan';
            }
        });
    
        return IsWrapper;
    })();
    
    ft.is = function (value) {
        return new IsWrapper(value);
    };

    /* jshint -W084 */
    var ObjectWrapper = (function () {
        function ObjectWrapper(value) {
            if (ft.type(value) !== 'object') {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(ObjectWrapper.prototype, {
            clone: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            create: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            defaults: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод возвращает значение свойства объекта
             * @param prop {String} Имя свойства объекта или путь <prop>.<prop1>.<prop2>...<propN>
             * @returns {*}
             */
            get: function (prop) {
                if (ft.type(prop) !== 'string') {
                    return;
                }
    
                var obj = this._value,
                    parts = prop.split('.'),
                    last = parts.pop();
    
                while (prop = parts.shift()) {
                    obj = obj[prop];
                    if (!ft.is(obj).exists()) {
                        return;
                    }
                }
    
                return obj[last];
            },
    
            /**
             * Метод проверяет наличие ключа в объекте
             * @param key Имя ключа
             * @returns {Boolean}
             */
            has: function (key) {
                return _.has.call(this._value, key);
            },
    
            /**
             * Метод возвращает объект, в котором все значения исходного объекта
             * стали ключами, а ключи - значениями
             * @returns {Object}
             */
            invert: function () {
                var result = {};
    
                this.keys().forEach(function (el) {
                    result[this._value[el]] = el;
                }, this);
    
                return result;
            },
    
            /**
             * Метод возвращает массив ключей исходного объекта
             * @returns {Array}
             */
            keys: function () {
                return Object.keys(this._value);
            },
    
            merge: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод создает пространство имен в исходном объекте
             * и создает вложенные объекты согласно переданному пути
             * @param path {String} Путь
             */
            namespace: function (path) {
                var obj = this._value;
                path.split('.').forEach(function (key) {
                    if (ft.type(obj[key]) !== 'undefined') {
                        obj[key] = {};
                    }
                    if (ft.type(obj[key]) === 'object') {
                        obj = obj[key];
                    } else {
                        throw new RangeError('Property already exists and is not an object.');
                    }
                });
                return obj;
            },
    
            /**
             * Метод возвращает копию объекта без переданных в метод ключей.
             * Ключ может представлять собой путь к свойству.
             * @returns {Object}
             */
            omit: function (keys, ctx) {
                var list,
                    fn;
    
                if (ft.type(keys) === 'array') {
                    list = ft.list(keys);
                    fn = function (key) {
                        return !list.contains(key);
                    };
                }
    
                if (ft.type(keys) === 'function') {
                    fn = ft.fn(keys).negate();
                }
    
                return this.pick(fn, ctx);
            },
    
            /**
             * Метод возвращает массив пар ключ-значение от исходного объекта
             * @returns {Array}
             */
            pairs: function () {
                var that = this;
                return this.keys().map(function (el) {
                    return [el, that._value[el]];
                });
            },
    
            /**
             * Метод возвращает копию объекта с ключами, переданными в метод.
             * Ключ может представлять собой путь к свойству.
             * @returns {Object}
             */
            pick: function (keys, ctx) {
                var result = {},
                    key;
    
                if (ft.type(keys) === 'array') {
                    keys.forEach(function (key) {
                        if (this.has(key)) {
                            result[key] = this._value[key];
                        }
                    }, this);
                }
    
                if (ft.type(keys) === 'function') {
                    for (key in this._value) {
                        if (this.has(key) && keys.call(ctx, key, this._value[key])) {
                            result[key] = this._value[key];
                        }
                    }
                }
    
                return result;
            },
    
            /**
             * Метод возвращает значение ключа
             * @param key {String} Ключ или путь
             * @returns {*}
             */
            result: function (key) {
                var prop = this.get(key);
    
                if (ft.type(prop) === 'undefined') {
                    return;
                }
    
                return ft.type(prop) === 'function' ? prop.call(this._value) : prop;
            },
    
            set: function (path, value) {
                // TODO: Реализовать
                throw new Error();
            },
    
            template: function () {
    
            },
    
            /**
             * Метод возвращает массив значений исходного объекта
             * @returns {Array}
             */
            values: function () {
                var that = this;
                return this.keys().map(function (el) {
                    return that._value[el];
                });
            }
        });
    
        return ObjectWrapper;
    })();
    
    ft.object = function (value) {
        return new ObjectWrapper(value);
    };
    

    var ListWrapper = (function () {
        function ListWrapper(value) {
            this._value = value;
        }
    
        _.extend(ListWrapper.prototype, {
            at: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            clone: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            concat: function () {
                // TODO: Реализовать ???
                throw new Error();
            },
    
            contains: function (item) {
                return this._value.indexOf(item) !== -1;
            },
    
            each: function (fn, ctx) {
                // TODO: Оставить только для чейнинга
                if (!ft.is(fn).fn()) {
                    throw new TypeError();
                }
                _.each.call(this._value, fn, ctx);
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
    
            map: function (fn, ctx) {
                // TODO: Оставить только для чейнинга
                if (!ft.is(fn).fn()) {
                    throw new TypeError();
                }
                return _.map.call(this._value, fn, ctx);
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
    
        return ListWrapper;
    })();
    
    ft.list = function (value) {
        return new ListWrapper(value);
    };

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

    var StringWrapper = (function () {
        function StringWrapper(value) {
            if (ft.type(value) !== 'string') {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(StringWrapper.prototype, {
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
                return this.trim().replace(new RegExp('[' + ft.settings.whitespace + ']+', 'ig'), ' ');
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
                    var value = data.get(ft.string(name).trim()),
                        type = ft.type(value);
                    return type === 'number' || type === 'string' ? '' + value : match;
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
             * Метод приводит исходную строку к дате по паттерну
             * @param pattern {String} Паттерн, по которому опредяется дата
             * @returns {Date}
             */
            toDate: function () {
    
            },
    
            /**
             * Метод приводит исходную строку к числу с плавающей точкой
             * @returns {Number}
             */
            toFloat: function () {
    
            },
    
            /**
             * Метод приводит исходную строку к целочисленному значению
             * @returns {Number}
             */
            toInt: function () {
    
            },
    
            /**
             * Метод удаляет с начала и с конца исходной строки переданные символы
             * @returns {String}
             */
            trim: function () {
                var chars = _.slice.call(arguments).join('');
                chars = chars.length ? chars : ft.settings.whitespace;
                return this._value.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
            },
    
            /**
             * Метод удаляет с начала исходной строки переданные символы
             * @returns {String}
             */
            trimLeft: function () {
                var chars = _.slice.call(arguments).join('');
                chars = chars.length ? chars : ft.settings.whitespace;
                return this._value.replace(new RegExp('^[' + chars + ']+'), '');
            },
    
            /**
             * Метод удаляет с конца исходной строки переданные символы
             * @returns {String}
             */
            trimRight: function () {
                var chars = _.slice.call(arguments).join('');
                chars = chars.length ? chars : ft.settings.whitespace;
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
    
        return StringWrapper;
    })();
    
    ft.string = function (value) {
        return new StringWrapper(value);
    };
    

    var HtmlWrapper = (function () {
        function HtmlWrapper(value) {
            if (ft.type(value) !== 'string') {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(HtmlWrapper.prototype, {
            escape: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            prune: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            stripAttrs: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            stripTags: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            truncate: function (limit, sfx) {
                // TODO: Реализовать
                throw new Error();
            },
    
            unescape: function () {
                // TODO: Реализовать
                throw new Error();
            }
        });
    
        return HtmlWrapper;
    })();
    
    ft.html = function (value) {
        return new HtmlWrapper(value);
    };

    var UrlWrapper = (function () {
        function UrlWrapper(value) {
            if (!ft.is(value).string()) {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(UrlWrapper.prototype, {
    
        });
    
        return UrlWrapper;
    })();
    
    ft.url = function (value) {
        return new UrlWrapper(value);
    };

    var FunctionWrapper = (function () {
        function FunctionWrapper(value) {
            if (ft.type(value) !== 'function') {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(FunctionWrapper.prototype, {
            after: function (times) {
                var that = this;
                return function() {
                    if (--times < 1) {
                        return that._value.apply(this, arguments);
                    }
                };
            },
    
            async: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            before: function (times) {
                var that = this, memo;
                return function () {
                    if (--times > 0) {
                        memo = that._value.apply(this, arguments);
                    } else {
                        that._value = null;
                    }
                    return memo;
                };
            },
    
            compose: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            curry: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            debounce: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            delay: function (ms) {
                var args = _.slice.call(arguments, 1),
                    that = this;
                return setTimeout(function () {
                    return that._value.apply(null, args);
                }, ms);
            },
    
            defer: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            memoize: function () {
                var that = this,
                    memos = {};
                return function () {
                    var key = JSON.stringify(ft.toArray(arguments));
                    if (!ft.is(memos[key]).defined()) {
                        memos[key] = that._value.apply(this, arguments);
                    }
                    return memos[key];
                };
            },
    
            negate: function () {
                var that = this;
                return function () {
                    return !that._value.apply(this, arguments);
                };
            },
    
            once: function () {
                return this.before(2);
            },
    
            partial: function () {
                var args = ft.toArray(arguments),
                    that = this;
    
                return function () {
                    return that._value.apply(this, args.concat(ft.toArray(arguments)));
                };
            },
    
            partialRight: function () {
                var args = _.slice.call(arguments),
                    that = this;
    
                return function () {
                    return that._value.apply(this, ft.toArray(arguments).concat(args));
                };
            },
    
            repeat: function () {
                // TODO: Реализовать
                // alias: times
                throw new Error();
            },
    
            throttle: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            wrap: function (fn) {
                if (ft.type(fn) !== 'function') {
                    throw new TypeError('Wrapper must be a function');
                }
    
                return ft.fn(fn).partial(this._value);
            }
        });
    
        return FunctionWrapper;
    })();
    
    ft.fn = function (value) {
        return new FunctionWrapper(value);
    };

    var NumberWrapper = (function () {
        function NumberWrapper(value) {
            if (ft.type(value) !== 'number') {
                throw new TypeError();
            }
    
            this._value = value;
        }
    
        _.extend(NumberWrapper.prototype, {
    
            format: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            parseInt: function () {
                return parseInt(this._value, 10);
            },
    
            plural: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            /**
             * Метод возводит в исходное число в переданную степень
             * @param  {Number} num Числитель степени
             * @param  {Number} den Знаменатель степени
             * @return {Number} 
             */
            pow: function (num, den) {
                // TODO: Реализовать
                throw new Error();  
            },
    
            /**
             * Вычисляет корень исходного числа
             * @return {Number}
             */
            root: function () {
                // TODO: Реализовать
                throw new Error();
            },
    
            sign: function () {
                return this._value < 0 ? -1 : 1;
            }
        });
    
        return NumberWrapper;
    })();
    
    ft.number = function (value) {
        return new NumberWrapper(value);
    };

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

    return ft;
}));