// Interface, no hay mucha diferencia con Type
interface Persona {
    name: string;
    age?: number;
    sayHello(): void;
}

const person: Persona = {
    name: "fran",
    age: 19,
    sayHello: function(){},
}

const personTwo: Persona = {
    name: "fran",
    sayHello: function(){},
}
