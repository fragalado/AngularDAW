interface Shape{
    name: string;
    height: number;
    width: number;
    color?: string;
}

function area(shape: Shape){
    var area = shape.height * shape.width;
    return "I'm a " + shape.name + " with an area of " + area + " cm squared.";
}
console.log(area({name: "rectángulo", height: 30, width: 15, color: "red"}));
console.log(area({name: "cuadrado", height: 30, width: 30}));
