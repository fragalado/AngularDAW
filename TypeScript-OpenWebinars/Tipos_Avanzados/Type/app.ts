// Type
const persona = {
    nombre: 'Fran',
}

const personaTwo = {
    nombre: 'fran',
}

type Persona = {
    nombre: string;
    age ?: number; // Se puede poner o no
}

const personaThree: Persona = {
    nombre: 'Fran',
    //nombre: 2,
    //age: 'Fran',
    age: 19, 
}

const personaFour: Persona = {
    nombre: 'Manuel',
}