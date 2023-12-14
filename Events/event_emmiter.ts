import { EventEmitter } from "stream";

const myTerribleRPG = new EventEmitter();
let level = 0;
let bonusFactor = 1;

myTerribleRPG.on('training', () => {
    level += 1 * bonusFactor;
    console.log('Bravo, quel entraînement !, vous êtes maintenant niveau ' + level);
})

myTerribleRPG.once('bonus', () => {
    bonusFactor *= 2;
    console.log('Vous portez un masque de canard');
})

myTerribleRPG.on('bossFight', () => {
    if (level < 5) {
        console.log('Le combat est échoué, notre personne est mort. :c');
    } else {
        console.log('Bravo, vous avez vaincu le boss. vous repartez avec tous les trésors');
    }
    process.exit();
})

myTerribleRPG.on('exit', () => {
    console.log("N'ayez crainte aventurier, vous n'êtes pas le seul à avoir abandonné");
    process.exit();
})

function displayMenu() {
    console.log(`
        Menu: \n
        1 - S'entraîner \n
        2 - Utiliser le bonus \n
        3 - Combattre le boss \n
        4 - Quitter le jeu \n
    `);
}

displayMenu();

process.stdin.on('data', (data) => {
    const option = data.toString().trim();

    if (option === '4') {
      myTerribleRPG.emit('exit');
    }

    if (option === '3') {
      myTerribleRPG.emit('bossFight');
    }


    if (option === '2') {
      myTerribleRPG.emit('bonus');
    }


    if (option === '1') {
      myTerribleRPG.emit('training');
    }

    displayMenu();
})