"use strict";
var idUser;
idUser = 20;
idUser = "3";
var usuarios = [
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
    var res = usuarios.filter(function (e) { return e.id == id; });
    return res[0];
}
console.log(getName(1));
console.log(getName("2"));
var smallPicture = "500x500";
var nombrePer;
nombrePer = "Diego";
// let message: boolean = (<string>nombrePer).length > 3;
var message = nombrePer.length > 3;
console.log(message);
function sayHello(name, age) {
    return { name: name, age: age == undefined ? "Sin edad" : age };
}
console.log(sayHello("Diego"));
console.log(sayHello("Alonso", 29));
