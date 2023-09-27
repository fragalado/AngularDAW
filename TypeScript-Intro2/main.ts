alert('Hola Mundo con watch mode!');

// TIPADO
let nombre1: string = "Fran";
let edad1 = 57;
edad1 = 17;
// edad1 = "diecinueve";
document.body.innerHTML = nombre1 + ' ' + edad1;
// window.addEventListener('load', () => document.body.innerHTML = nombre + ' ' + edad); ESTO SERIA PARA SI PONEMOS EL SCRIPT EN EL HEAD

// INTERFAZ
import { Persona } from "./modelos/modelos";
var persona: Persona = {
    nombre: 'Fran',
    edad: 19,
    apellidos: 'Gallego Dorado'
}

// CLASE
import { Alumno } from "./modelos/modelos";
// Se podria poner: import { Persona, Alumno } from "./modelos/modelos";
window.addEventListener('load', () => {
    let alumno1: Alumno = new Alumno(persona, 'CSI"');
    let h1 = document.createElement('h1');
    h1.innerText = alumno1.nombreCompleto();
})
