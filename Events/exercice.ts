/*
  Pour cet exercice, sauvez l'e-campus.
  Un message s'affichera chaque secondes avec un Décompte (qui commence à 10).
  Au bout de ces 10 secondes, un événement se déclenchera pour nous demander d'entrer un mot de passe.
  Si le mot de passe est correcte, on aura sauvé l'e-campus
  Si pas, le batiment s'écroule 
*/

import { EventEmitter } from "stream";

const bombPassword = "Alfred";
const bomb = new EventEmitter();

bomb.on('passwordRequest', () => {
    console.log('Entre le mot de passe idiot de formateur !');
    process.stdin.once('data', (data) => {
        let password = data.toString().trim();
        if (password === bombPassword) {
            bomb.emit("deactivated");
        } else {
            bomb.emit("explode");
        }
    })
})

bomb.once('deactivated', () => {
    console.log('Youhou ! Vous avez sauvé l\'ecampus');
})

bomb.once('explode', () => {
    console.log('Ho non ! le batiment explose');
})

let secondesBeforePasswordRequest = 10;

const bombInterval = setInterval(() => {
    if (secondesBeforePasswordRequest > 0) {
        console.log(`Il reste ${secondesBeforePasswordRequest} secondes avant l'explosion`);        
    } else {
        console.log('here');
        bomb.emit('passwordRequest');
        clearInterval(bombInterval);
    }
    secondesBeforePasswordRequest--;
}, 1000);


