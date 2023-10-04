var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alumno = /** @class */ (function () {
    // Constructor
    function Alumno(nombre, apellidos, curso) {
        this.repetidor = false;
        this.numAsignaturas = 5;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }
    // Método
    Alumno.prototype.nombreCompleto = function () {
        return this.nombre + " " + this.apellidos;
    };
    return Alumno;
}());
var alumno1 = new Alumno("Fran", "gallego dorado", "DAW 2ª");
console.log(alumno1);
console.log(alumno1.apellidos);
// console.log(alumno1.curso);
// console.log(alumno1.repetidor);
console.log(typeof alumno1);
console.log(alumno1 instanceof Alumno);
console.log(alumno1 instanceof Object);
console.log(alumno1.nombreCompleto());
// 1. Crea la clase Asignatura
// 2. Propiedades: nombre, profesor, curso, esLlave
// 3. Haz un objeto que sea asignatura1
// 4. Añadir propiedad que sea un array de string, se llamara alumnosMatriculados
// 5. Hacer metodo que reciba un nombre de alumno y lo añada al array
var Asignatura = /** @class */ (function () {
    // Constructor
    function Asignatura(nombre, profesor, curso, esLlave) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.curso = curso;
        this.esLlave = esLlave;
        this.alumnosMatriculados = [];
    }
    // Método
    Asignatura.prototype.matricular = function (nombre) {
        this.alumnosMatriculados.push(nombre);
    };
    Asignatura.prototype.devuelveAlumnos = function () {
        return this.alumnosMatriculados;
    };
    return Asignatura;
}());
var asignatura1 = new Asignatura("DWC", "Jose maría", "csi2", false);
var asignatura2 = new Asignatura("DAW", "Jose maria carazo", "csi2", false);
console.log("Asignatura 1:");
console.log(asignatura1.nombre);
console.log(asignatura1.profesor);
console.log(asignatura1.curso);
console.log(asignatura1.esLlave);
asignatura1.matricular("Francisco Jose Gallego Dorado");
asignatura1.matricular("Daniel Gallego Dorado");
console.log(asignatura1.devuelveAlumnos());
var vector = asignatura1.devuelveAlumnos();
console.log(typeof vector);
asignatura1.matricular("Isidro Romero Dorado");
console.log(asignatura1.devuelveAlumnos());
console.log("Asignatura 2:");
console.log(asignatura2.nombre);
console.log(asignatura2.profesor);
console.log(asignatura2.curso);
console.log(asignatura2.esLlave);
// =======================================
var Vehiculo = /** @class */ (function () {
    function Vehiculo(combustible, ruedas) {
        this.combustible = combustible;
        this.ruedas = ruedas;
    }
    return Vehiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(combustible, ruedas) {
        return _super.call(this, combustible, ruedas) || this;
    }
    return Moto;
}(Vehiculo));
var yamaha = new Moto("Gasolina", 2);
console.log(yamaha.combustible);
console.log(yamaha.ruedas);
// Clases abstractas
var Arma = /** @class */ (function () {
    // Constructor
    function Arma(nombre, fuerza, magia) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.magia = magia;
    }
    return Arma;
}());
// let espada: Arma = new Arma(); NO se puede porque es un clase abstracta
var Espada = /** @class */ (function (_super) {
    __extends(Espada, _super);
    function Espada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Espada;
}(Arma));
var anduril = new Espada("anduril", 100, true);
console.log(anduril);
console.log(anduril.nombre);
console.log(anduril.fuerza);
var Metralleta = /** @class */ (function (_super) {
    __extends(Metralleta, _super);
    function Metralleta(nombre, fuerza, magia, propietario) {
        var _this = _super.call(this, nombre, fuerza, magia) || this;
        _this.propietario = propietario;
        return _this;
    }
    return Metralleta;
}(Arma));
var lobezno = { nombre: 'Logan', poder: '' };
lobezno.poder = 'Regeneracion';
lobezno.esDeLosBuenos = true;
var Mutante = /** @class */ (function () {
    function Mutante(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("El mutante se llama ".concat(nombre));
        this.nombre = nombre;
    };
    return Mutante;
}());
var mutante = new Mutante("Hulk", "Fuerza");
console.log(mutante);
mutante.regenerar("Thor");
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar);
console.log(sumar(2, 3));
function nombreFuncion(parametros) {
    return 'lo que sea';
}
var miFuncion = function (numero) {
    return 1;
};
var otraFuncion = function (nombre) {
    return 'lo que sea';
};
