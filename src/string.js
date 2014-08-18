ft.string = function (value) {
    var _string = {};

    _string.truncate = function (limit, suffix) {
        suffix = suffix || '...';
        return value.length > limit ? value = value.substring(0, limit - suffix.length) + suffix : value;
    };

    return _string;
};