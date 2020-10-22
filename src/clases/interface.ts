interface Person {
  id: string;
  name: string;
  lastname: string;
}

interface Student extends Person {
  carrer: string;
}
