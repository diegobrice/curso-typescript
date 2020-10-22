"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name, _tipo;
class AnimalOculto {
    constructor(name, tipo) {
        _name.set(this, void 0);
        _tipo.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _tipo, tipo);
    }
    get name() {
        return __classPrivateFieldGet(this, _name);
    }
    set name(newName) {
        __classPrivateFieldSet(this, _name, newName);
    }
}
_name = new WeakMap(), _tipo = new WeakMap();
let tigre = new AnimalOculto("Tigre", "Felino");
console.log(tigre.name);
tigre.name = "Leon";
console.log(tigre.name);
