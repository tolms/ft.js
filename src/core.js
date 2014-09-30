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

    ft.VERSION = '<%= version %>';

    // @include common.js

    // @include object.js

    // @include list.js

    // @include is.js

    // @include string.js

    // @include fn.js

    return ft;
}));