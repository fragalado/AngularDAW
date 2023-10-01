function rollTheDice(userName: string, maxOfTries: number){
    let results: string[] = [];
    let MAX_DICE_NUMBER: number = 6;

    for (let index = 0; index < maxOfTries; index++) {
        const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
    
        if (result === MAX_DICE_NUMBER) {
          results.push(`${userName} is a WINNER || ${result}=${MAX_DICE_NUMBER}`);
        } else {
          results.push(`${userName} is a LOSER || ${result}=${MAX_DICE_NUMBER}`);
        }
    }

    return results;
}

let results = rollTheDice('TypeScript', 10);

console.log(results);

// results = rollTheDice(1, 'String'); Da error
// results = rollTheDice('Fran'); Da error porque falta poner un parametro