//SUPERCLASE
abstract class Item {
  protected _id: number;
  protected _title: string;
  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }
  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  private _size: string;

  constructor(id: number, title: string, size: string) {
    // this.id = id;
    // this.title = title;
    super(id, title);
    this._size = size;
  }
  get size(): string {
    return this._size;
  }
  set size(size: string) {
    this._size = size;
  }
}

class Album extends Item {
  private _pictures: Picture[];

  constructor(id: number, title: string) {
    // this.id = id;
    // this.title = title;
    super(id, title);
    this._pictures = [];
  }
  addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album1 = new Album(202, "Atardecer");
const pic1 = new Picture(123, "Sunset", "200x200");
const pic2 = new Picture(323, "Jardin", "300x300");
album1.addPicture(pic1);
album1.addPicture(pic2);
console.log(album1);
console.log(album1.id);
console.log(album1.title);
console.log(pic1);
console.log(pic1.id);
console.log(pic1.title);
console.log(pic1.size);
console.log(pic2);
console.log(pic2.id);
console.log(pic2.title);
console.log(pic2.size);
