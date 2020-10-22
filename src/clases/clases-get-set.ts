class AnimalOculto {
  #name: string;
  #tipo: string;

  constructor(name: string, tipo: string) {
    this.#name = name;
    this.#tipo = tipo;
  }

  get name() {
    return this.#name;
  }
  set name(newName: string) {
    this.#name = newName;
  }
}

let tigre = new AnimalOculto("Tigre", "Felino");
console.log(tigre.name);
tigre.name = "Leon";
console.log(tigre.name);
