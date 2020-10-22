export {};

class Person {
  id: string;
  name: string;

  constructor(newId: string, newName: string) {
    this.id = newId;
    this.name = newName;
  }

  saludar() {
    console.log("hello ", this.name);
  }
}

class Libro {
  constructor(
    public title: string,
    public author: string,
    public ediciones: string[] = []
  ) {}

  addEdicion(edicion: string) {
    this.ediciones.push(edicion);
  }
}

let Diego = new Person("101", "Diego Briceño");
Diego.saludar();

let libroNuevo1: Libro = new Libro("100 años de soledad", "Garcia Marquez");
let libroNuevo2: Libro = new Libro("Casa y los perros", "Vargas LLosa");

// let arrLibros: Array<Libro> = [LibroNuevo1, LibroNuevo2];
let arrLibros: Libro[] = [libroNuevo1, libroNuevo2];
console.log(arrLibros);

libroNuevo1.addEdicion("v1");
libroNuevo1.addEdicion("v2");
libroNuevo2.addEdicion("v11");
libroNuevo2.addEdicion("v21");
libroNuevo2.addEdicion("v13");
libroNuevo2.addEdicion("v25");

console.log(arrLibros);

class Animal {
  private name: string;
  private tipo: string;
  private vida: boolean = true;

  constructor(name: string, tipo: string) {
    this.name = name;
    this.tipo = tipo;
  }

  private matar() {
    this.vida = false;
  }
}

let leon = new Animal("Leon", "Felino");
console.log(leon);
console.log(leon.name);

class AnimalOculto {
  #name: string;
  #tipo: string;
  #vida: boolean = true;

  constructor(name: string, tipo: string) {
    this.#name = name;
    this.#tipo = tipo;
  }

  private matar() {
    this.#vida = false;
  }
}

let tigre = new AnimalOculto("Tigre", "Felino");
console.log(tigre);
// console.log(tigre.#name);
