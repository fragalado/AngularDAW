class Alumno {

    // Atributos
    nombre: string;
    apellidos: string;
    private curso: string;
    protected repetidor: boolean = false;
    numAsignaturas: number = 5;

    // Constructor
    constructor(nombre: string, apellidos:string, curso:string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso
    }

    // Método
    public nombreCompleto(): string{
        return this.nombre + " " + this.apellidos;
    }
}

let alumno1: Alumno = new Alumno("Fran", "gallego dorado", "DAW 2ª");
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
class Asignatura {

    // Atributos
    nombre: string;
    profesor: string;
    curso: string;
    esLlave: boolean;
    private alumnosMatriculados: string[];

    // Constructor
    constructor(nombre: string, profesor: string, curso: string, esLlave: boolean) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.curso = curso;
        this.esLlave = esLlave;
        this.alumnosMatriculados = [];
    }

    // Método
    public matricular(nombre: string): void{
        this.alumnosMatriculados.push(nombre);
    }

    public devuelveAlumnos(): string[]{
        return this.alumnosMatriculados;
    }
}

let asignatura1 = new Asignatura("DWC", "Jose maría", "csi2", false);
let asignatura2 = new Asignatura("DAW", "Jose maria carazo", "csi2", false);
console.log("Asignatura 1:");
console.log(asignatura1.nombre);
console.log(asignatura1.profesor);
console.log(asignatura1.curso);
console.log(asignatura1.esLlave);
asignatura1.matricular("Francisco Jose Gallego Dorado")
asignatura1.matricular("Daniel Gallego Dorado")
console.log(asignatura1.devuelveAlumnos());
let vector: string[] = asignatura1.devuelveAlumnos()
console.log(typeof vector);
asignatura1.matricular("Isidro Romero Dorado");
console.log(asignatura1.devuelveAlumnos());





console.log("Asignatura 2:");
console.log(asignatura2.nombre);
console.log(asignatura2.profesor);
console.log(asignatura2.curso);
console.log(asignatura2.esLlave);

// =======================================

class Vehiculo{
    combustible: string;
    ruedas: number;

    constructor(combustible: string, ruedas: number) {
        this.combustible = combustible;
        this.ruedas = ruedas;
    }
}

class Moto extends Vehiculo{
    constructor(combustible: string, ruedas: number) {
        super(combustible, ruedas);
    }
}

let yamaha = new Moto("Gasolina", 2);
console.log(yamaha.combustible);
console.log(yamaha.ruedas);

// Clases abstractas
abstract class Arma {
    // Constructor
    constructor(public nombre: string, public fuerza: number, private magia: boolean) { 
    }

    // Métodos
}

// let espada: Arma = new Arma(); NO se puede porque es un clase abstracta

class Espada extends Arma {}

let anduril = new Espada("anduril", 100, true);
console.log(anduril);
console.log(anduril.nombre);
console.log(anduril.fuerza);

class Metralleta extends Arma {
    constructor(nombre: string, fuerza: number, magia: boolean ,public propietario: string) {
        super(nombre, fuerza, magia);
    }
}

// Interfaces
interface Xmen {
    nombre: string;
    poder: string;
    esDeLosBuenos?: boolean;
}
let lobezno: Xmen = {nombre: 'Logan', poder: ''};
lobezno.poder = 'Regeneracion';
lobezno.esDeLosBuenos = true;

interface Xmen2 {
    nombre: string;
    nombreReal ?: string;
    regenerar(nombreReal: string): void;
}

class Mutante implements Xmen2 {
    constructor(public nombre: string, public poder: string) {
    }

    regenerar(nombre: string): void {
        console.log(`El mutante se llama ${nombre}`);
        this.nombre = nombre;
    }
}
let mutante: Mutante = new Mutante("Hulk", "Fuerza");
console.log(mutante);
mutante.regenerar("Thor");

// Interfaces para funciones
interface FuncionConDosNumeros {
    (num1: number, num2: number): number
}

let sumar: FuncionConDosNumeros = (a: number, b: number) =>{
    return a+b;
}
console.log(sumar);
console.log(sumar(2,3));

function nombreFuncion(parametros:string):string{
    return 'lo que sea';
}
let miFuncion = function(numero:number): number{
    return 1;
}
let otraFuncion = (nombre:string) =>{
    return 'lo que sea';
}

// Extender interfaces
interface Ordenador {
    marca: string;
    color: string;
}

interface Portatil extends Ordenador {

}

