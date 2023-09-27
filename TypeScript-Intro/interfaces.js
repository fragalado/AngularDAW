function area(shape) {
    var area = shape.height * shape.width;
    return "I'm a " + shape.name + " with an area of " + area + " cm squared.";
}
console.log(area({ name: "rectángulo", height: 30, width: 15, color: "red" }));
console.log(area({ name: "cuadrado", height: 30, width: 30 }));
