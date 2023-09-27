"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(persona, clase) {
        this.nombre = persona.nombre;
        this.apellidos = persona.apellidos;
        this.edad = persona.edad;
        this.clase = clase;
    }
    Alumno.prototype.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellidos;
    };
    Alumno.prototype.setClase = function (clase) {
        this.clase = clase;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
