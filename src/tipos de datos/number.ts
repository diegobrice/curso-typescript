// tipo:number
// numeros, hexadecimales, binarios, octales

let phone: number;
phone = 965678538;
let isActive = true;
let username: string = "Diego";

let person: string = `
  Person:
  username: ${username},
  phone: ${phone},
  status: ${isActive}
`;

console.log(person);

function sayHello(name: string): void {
  console.log(`Hola ${name}`);
}

sayHello(username);
console.log(phone);
