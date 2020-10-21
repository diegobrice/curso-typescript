"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name, _tipo, _vida;
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(newId, newName) {
        this.id = newId;
        this.name = newName;
    }
    saludar() {
        console.log("hello ", this.name);
    }
}
class Libro {
    constructor(title, author, ediciones = []) {
        this.title = title;
        this.author = author;
        this.ediciones = ediciones;
    }
    addEdicion(edicion) {
        this.ediciones.push(edicion);
    }
}
let Diego = new Person("101", "Diego Briceño");
Diego.saludar();
let libroNuevo1 = new Libro("100 años de soledad", "Garcia Marquez");
let libroNuevo2 = new Libro("Casa y los perros", "Vargas LLosa");
// let arrLibros: Array<Libro> = [LibroNuevo1, LibroNuevo2];
let arrLibros = [libroNuevo1, libroNuevo2];
console.log(arrLibros);
libroNuevo1.addEdicion("v1");
libroNuevo1.addEdicion("v2");
libroNuevo2.addEdicion("v11");
libroNuevo2.addEdicion("v21");
libroNuevo2.addEdicion("v13");
libroNuevo2.addEdicion("v25");
console.log(arrLibros);
class Animal {
    constructor(name, tipo) {
        this.vida = true;
        this.name = name;
        this.tipo = tipo;
    }
    matar() {
        this.vida = false;
    }
}
let leon = new Animal("Leon", "Felino");
console.log(leon);
console.log(leon.name);
class AnimalOculto {
    constructor(name, tipo) {
        _name.set(this, void 0);
        _tipo.set(this, void 0);
        _vida.set(this, true);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _tipo, tipo);
    }
    matar() {
        __classPrivateFieldSet(this, _vida, false);
    }
}
_name = new WeakMap(), _tipo = new WeakMap(), _vida = new WeakMap();
let tigre = new AnimalOculto("Tigre", "Felino");
console.log(tigre);
// console.log(tigre.#name);
