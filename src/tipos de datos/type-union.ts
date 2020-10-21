let idUser: number | string;
idUser = 20;
idUser = "3";

type idUsuario = number | string;
type nomUsuario = {};

let usuarios: Array<{ id: number; name: string }> = [
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

function getName(id: idUsuario): nomUsuario {
  const res = usuarios.filter((e) => e.id == id);
  return res[0];
}

console.log(getName(1));
console.log(getName("2"));

type SquareSize = "100x100" | "500x500" | "1000x1000";
let smallPicture: SquareSize = "500x500";

let nombrePer: any;
nombrePer = "Diego";

// let message: boolean = (<string>nombrePer).length > 3;
let message: boolean = (nombrePer as string).length > 3;
console.log(message);

function sayHello(name: string, age?: number): object {
  return { name, age: age == undefined ? "Sin edad" : age };
}

console.log(sayHello("Diego"));
console.log(sayHello("Alonso", 29));
