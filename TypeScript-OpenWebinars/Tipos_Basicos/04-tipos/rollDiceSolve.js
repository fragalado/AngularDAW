function rollTheDice(userName, maxOfTries) {
    var results = [];
    var MAX_DICE_NUMBER = 6;
    for (var index = 0; index < maxOfTries; index++) {
        var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push("".concat(userName, " is a WINNER || ").concat(result, "=").concat(MAX_DICE_NUMBER));
        }
        else {
            results.push("".concat(userName, " is a LOSER || ").concat(result, "=").concat(MAX_DICE_NUMBER));
        }
    }
    return results;
}
var results = rollTheDice('TypeScript', 10);
console.log(results);
// results = rollTheDice(1, 'String'); Da error
// results = rollTheDice('Fran'); Da error porque falta poner un parametro
