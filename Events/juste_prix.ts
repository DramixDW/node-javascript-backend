/*
  Vous allez créez un juste prix. Quand on lance le script, 
  un nombre aléatoire sera généré entre 1 et 1000. Ensuite, 
  l'utilisateur aura 10 essais pour trouver le "juste prix".
  
  S'il n'a pas trouvé au bout de 10 essais, on affiche la réponse et on lui dit qu'il a perdu.

  // termine le script/processus node
  process.exit()
*/

const justePrix = Math.ceil(Math.random() * 1000);
let tryCount = 0;


console.log("Essayez de deviner le juste prix, il est entre 1 et 1000");

process.stdin.on('data', (data) => {
    const userNumber = Number(data.toString());

    if (isNaN(userNumber)) {
        console.log("Ce n'est pas un nombre :angry_face:");
    }

    if (userNumber < justePrix) {
        console.log('C\'est plus !');
    }

    if (userNumber > justePrix)  {
        console.log("C'est moins !");
    }

    if (userNumber === justePrix) {
        console.log("Vous avez trouvé ! Bip bip ! Le nombre était :" + justePrix);
        process.exit();
    }

    tryCount++;
    console.log(`Vous avez fait ${tryCount}/10 essais`);
    if (tryCount === 10) {
        console.log('Vous avez perdu. Le juste prix était:' + justePrix);
        process.exit();
    }
})

