alert('Hola clase de CSI2');
console.log("Hola Pueblo");
// Variables
let miNombre: string;

// Funciones basicas
function escribeNombre(): string {
    return miNombre;
}

function escribeNombreDos(): void{
    console.log(miNombre);
}

function tuNombre(nombre: string): string{ // Function con parametros obligatorios
    return nombre;
}

let activar_batisenal = function(): string{
    return "Basi señal";
}

console.log(escribeNombre());
escribeNombreDos();
console.log(activar_batisenal());
console.log(tuNombre("Fran"));

// Enum
enum Power{
    min = 1,
    medio,
    max = 10,
    otroNumero
}
let miPower:number = Power.min;
console.log(miPower); // Devuelve 1
console.log(Power.medio); // Devuelve 2
console.log(Power.max); // Devuelve 10
console.log(Power.otroNumero); // Devuelve 11
console.log(Power[1]); // Devuelve min
console.log(Power[10]); // Devuelve max
console.log(typeof Power);

// Asercion de tipo
let poder: any = "100";
let largoDelPoder: number = poder.length;
// En la anterior no he tenido ayudas, el siguiente modo si
let otroLargoDelPoder: number = (<string>poder).length;

console.log(largoDelPoder + otroLargoDelPoder); // 6
console.log(largoDelPoder + '3' + otroLargoDelPoder); // 333
console.log(largoDelPoder + otroLargoDelPoder + '3'); // 63
console.log('3' + largoDelPoder + otroLargoDelPoder); // 333
console.log(largoDelPoder + ' ' + otroLargoDelPoder); // 33
console.log(String(poder).length); // 3
console.log(poder.toString().length); // 3

// Parámetros REST
function equipoHeroico(nombreEquipo:string, ...heroesDelEquipo: string[]): string {
    return `${nombreEquipo}: ${heroesDelEquipo.join(",")}`;
}

console.log(equipoHeroico("Marvel"));
console.log(equipoHeroico("Marvel", "Spiderman", "Superman", "Hulk"));
console.log(equipoHeroico("Marvel", "Ironman"));



