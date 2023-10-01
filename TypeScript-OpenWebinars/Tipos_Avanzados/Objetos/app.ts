// Objetos, en la version 2.2 de ts se elimino, pero se puede hacer de otra forma
// Records
const myObject: Record<any, any> = {};

myObject.name = 'Fran';
myObject.age = 19;

const myObject2: Record<string, string> = {};

myObject2.name = 'Fran';
// myObject2.age = 19; No se puede porque es number y el objeto le hemos dicho que solo es string