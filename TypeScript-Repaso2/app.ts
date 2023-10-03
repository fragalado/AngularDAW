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