let user: [number, string];

user = [1, "diegobrice"];

console.log(user);
console.log(user[0]);
console.log(user[1].length);

let arrTuplas: [number, string][];
arrTuplas = [];
arrTuplas.push([1, "diego"]);
arrTuplas.push([2, "alonso"]);
arrTuplas.push([3, "bryce"]);
console.log(arrTuplas);

arrTuplas[2][1] = "brice";
console.log(arrTuplas);
