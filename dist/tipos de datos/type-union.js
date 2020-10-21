"use strict";
let idUser;
idUser = 20;
idUser = "3";
let usuarios = [
    {
        id: 1,
        name: "Diego",
    },
    {
        id: 2,
        name: "Alonso",
    },
    {
        id: 3,
        name: "Pedro",
    },
];
function getName(id) {
    const res = usuarios.filter((e) => e.id == id);
    return res[0];
}
console.log(getName(1));
console.log(getName("2"));
let smallPicture = "500x500";
let nombrePer;
nombrePer = "Diego";
// let message: boolean = (<string>nombrePer).length > 3;
let message = nombrePer.length > 3;
console.log(message);
function sayHello(name, age) {
    return { name, age: age == undefined ? "Sin edad" : age };
}
console.log(sayHello("Diego"));
console.log(sayHello("Alonso", 29));
