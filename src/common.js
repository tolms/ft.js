/**
 * Набор общих методов
 */
var objProto = Object.prototype,
    strProto = String.prototype;

var nativeToString = objProto.toString,
    nativeHasOwnProperty = objProto.hasOwnProperty,
    nativeKeys = objProto.keys,
    nativeTrim = strProto.trim,
    nativeTrimRight = strProto.trimRight,
    nativeTrimLeft = strProto.trimLeft;