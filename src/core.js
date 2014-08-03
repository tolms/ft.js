(function (root, factory) {
    if (typeof define === 'function' && typeof define.amd === 'object') {
        define(function () {
            return factory();
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.ft = factory();
    }
}(this, function () {
    'use strict';

    var ft = {};

    ft.VERSION = '<%= version %>';

    // @include array.js

    // @include is.js

    // @include string.js

    // @include fn.js

    return ft;
}));