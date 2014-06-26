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

    ft.VERSION = '0.0.1';

    ft.array = function (value) {
    
        return {
            value: function () {
                return value;
            }
        };
    };

    return ft;
}));