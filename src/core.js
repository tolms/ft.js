(function(root, factory) {

    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(function() {
            return factory();
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.ft = factory();
    }

}(this, function() {
    'use strict';

    var ft = {};

    ft.VERSION = '<%= version %>';

    // @include array.js
    // @include string.js

    return ft;
}));