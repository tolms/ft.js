ft.string = function (value) {
    return {
        truncate: function (limit) {
            return value.length > limit ? value = value.substring(0, limit - 3) + '...' : value;
        }
    };
};