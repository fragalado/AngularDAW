export interface Persona {
    nombre: string;
    apellidos: string;
    edad: number;
}

export class Alumno implements Persona{
    nombre: string;
    apellidos: string;
    edad: number;
    private clase: string;

    constructor(persona: Persona, clase: string) {
        this.nombre = persona.nombre;
        this.apellidos = persona.apellidos;
        this.edad = persona.edad;
        this.clase = clase;
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellidos;
    }

    public setClase(clase: string){
        this.clase = clase;
    }
}