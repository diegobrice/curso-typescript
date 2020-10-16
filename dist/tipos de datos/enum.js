"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["Usuario"] = 1] = "Usuario";
    Roles[Roles["Callcenter"] = 2] = "Callcenter";
    Roles[Roles["Proveedor"] = 3] = "Proveedor";
    Roles[Roles["Admin"] = 4] = "Admin";
})(Roles || (Roles = {}));
var Diego = Roles.Admin;
var Alonso = Roles.Usuario;
var Bryce = Roles.Callcenter;
var Postigo = Roles.Proveedor;
console.log(Diego, Alonso, Bryce, Postigo);
var Country;
(function (Country) {
    Country["Peru"] = "PER";
    Country["Colombia"] = "COL";
    Country["Mexico"] = "MEX";
})(Country || (Country = {}));
var persona = {
    name: "Diego Briceño",
    country: Country.Peru,
};
console.log(Country.Colombia);
console.log(persona);
