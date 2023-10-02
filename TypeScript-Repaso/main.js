alert('Hola clase de CSI2');
console.log("Hola Pueblo");
// Variables
var miNombre;
// Funciones basicas
function escribeNombre() {
    return miNombre;
}
function escribeNombreDos() {
    console.log(miNombre);
}
function tuNombre(nombre) {
    return nombre;
}
var activar_batisenal = function () {
    return "Basi señal";
};
console.log(escribeNombre());
escribeNombreDos();
console.log(activar_batisenal());
console.log(tuNombre("Fran"));
// Enum
var Power;
(function (Power) {
    Power[Power["min"] = 1] = "min";
    Power[Power["medio"] = 2] = "medio";
    Power[Power["max"] = 10] = "max";
    Power[Power["otroNumero"] = 11] = "otroNumero";
})(Power || (Power = {}));
var miPower = Power.min;
console.log(miPower); // Devuelve 1
console.log(Power.medio); // Devuelve 2
console.log(Power.max); // Devuelve 10
console.log(Power.otroNumero); // Devuelve 11
console.log(Power[1]); // Devuelve min
console.log(Power[10]); // Devuelve max
console.log(typeof Power);
// Asercion de tipo
var poder = "100";
var largoDelPoder = poder.length;
// En la anterior no he tenido ayudas, el siguiente modo si
var otroLargoDelPoder = poder.length;
console.log(largoDelPoder + otroLargoDelPoder); // 6
console.log(largoDelPoder + '3' + otroLargoDelPoder); // 333
console.log(largoDelPoder + otroLargoDelPoder + '3'); // 63
console.log('3' + largoDelPoder + otroLargoDelPoder); // 333
console.log(largoDelPoder + ' ' + otroLargoDelPoder); // 33
console.log(String(poder).length); // 3
console.log(poder.toString().length); // 3
// Parámetros REST
function equipoHeroico(nombreEquipo) {
    var heroesDelEquipo = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        heroesDelEquipo[_i - 1] = arguments[_i];
    }
    return "".concat(nombreEquipo, ": ").concat(heroesDelEquipo.join(","));
}
console.log(equipoHeroico("Marvel"));
console.log(equipoHeroico("Marvel", "Spiderman", "Superman", "Hulk"));
console.log(equipoHeroico("Marvel", "Ironman"));
