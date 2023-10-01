// OR

type PersonName = {
    name: string;
}

type PersonAge = {
    age: number;
}

type PersonHello = {
    sayHello: () => void; // Método devuelve void/nada
}

type Person = PersonName | PersonAge | PersonHello;

const person: Person = {
    name: 'Fran',
}

const personTwo: Person = {
    name: 'Fran',
    age: 19,
}