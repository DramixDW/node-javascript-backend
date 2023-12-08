/*
Réaliser un script qui permet d'additioner tous les arguments qu'on lui passe.
Bonus: Renvoyer une erreur quand un argument n'est pas un nombre
*/

const numberArgs = process.argv.slice(2);
let result = 0;

for (const number of numberArgs) {
    const numberAsNumber = Number(number);
    if (isNaN(numberAsNumber)) {
        throw new Error(`${number} is not a number`)
    }
    result += numberAsNumber;
}

console.log(result)
