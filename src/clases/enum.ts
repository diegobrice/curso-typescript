enum Roles {
  Usuario = 1,
  Callcenter,
  Proveedor,
  Admin,
}

const Diego: Roles = Roles.Admin;
const Alonso: Roles = Roles.Usuario;
const Bryce: Roles = Roles.Callcenter;
const Postigo: Roles = Roles.Proveedor;

console.log(Diego, Alonso, Bryce, Postigo);

enum Country {
  Peru = "PER",
  Colombia = "COL",
  Mexico = "MEX",
}

let persona = {
  name: "Diego Briceño",
  country: Country.Peru,
};

console.log(Country.Colombia);
console.log(persona);
