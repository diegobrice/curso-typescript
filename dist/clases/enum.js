"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["Usuario"] = 1] = "Usuario";
    Roles[Roles["Callcenter"] = 2] = "Callcenter";
    Roles[Roles["Proveedor"] = 3] = "Proveedor";
    Roles[Roles["Admin"] = 4] = "Admin";
})(Roles || (Roles = {}));
const Diego = Roles.Admin;
const Alonso = Roles.Usuario;
const Bryce = Roles.Callcenter;
const Postigo = Roles.Proveedor;
console.log(Diego, Alonso, Bryce, Postigo);
var Country;
(function (Country) {
    Country["Peru"] = "PER";
    Country["Colombia"] = "COL";
    Country["Mexico"] = "MEX";
})(Country || (Country = {}));
let persona = {
    name: "Diego Briceño",
    country: Country.Peru,
};
console.log(Country.Colombia);
console.log(persona);
