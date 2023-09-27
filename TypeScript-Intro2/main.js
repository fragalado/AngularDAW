"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
alert('Hola Mundo con watch mode!');
// TIPADO
var nombre1 = "Fran";
var edad1 = 57;
edad1 = 17;
// edad1 = "diecinueve";
document.body.innerHTML = nombre1 + ' ' + edad1;
var persona = {
    nombre: 'Fran',
    edad: 19,
    apellidos: 'Gallego Dorado'
};
// CLASE
var modelos_1 = require("./modelos/modelos");
// Se podria poner: import { Persona, Alumno } from "./modelos/modelos";
window.addEventListener('load', function () {
    var alumno1 = new modelos_1.Alumno(persona, 'CSI"');
    var h1 = document.createElement('h1');
    h1.innerText = alumno1.nombreCompleto();
});
