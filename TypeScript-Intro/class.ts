class Shape {
    // Atributos

    area: number;
    color: string;

    // Constructor

    constructor(name: string, width: number, height: number) {
        this.area = width * height;
        this.color = "pink";
    }

    shoutout(){
        return "El area del " + name + " es " + this.area + "cm cuadrados.";
    }
}

let rectangulo = new Shape("rectangulo", 30, 15);
rectangulo.shoutout();