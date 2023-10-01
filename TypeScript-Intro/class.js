var Shape = /** @class */ (function () {
    // Constructor
    function Shape(name, width, height) {
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
        return "El area del " + name + " es " + this.area + "cm cuadrados.";
    };
    return Shape;
}());
var rectangulo = new Shape("rectangulo", 30, 15);
rectangulo.shoutout();
