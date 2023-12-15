/*
  Créer une function dont le but va être de fusionner 2 fichiers. Le nom du fichier sera
   <nomFichier1>+<nomFichier2>.<extension>

  Bonus: Faire en sorte que la fonction soit compatible avec un nombre indéfini de fichier
  Bonus 2: Faire un script où l'on peut utiliser passer les différents noms de fichier en argument de notre commande node/ts-node
*/

import { readFile, writeFile } from "fs/promises";

function getFileNamesMerged(fileNames: string[]) {
    const filenamesWithoutExtension = fileNames.map(filename => {
        const splittedName = filename.split('.');
        splittedName.pop();
        return splittedName.join('.');
    }).join('+');

    const fileExtensions = fileNames.map(filename => filename.split('.').pop());

    const shouldBeFinalExtension = fileExtensions[0];

    for (const extension of fileExtensions.slice(0)) {
        if (extension !== shouldBeFinalExtension) {
            throw new Error('Filetypes are imcompatibles');
        }
    }

    return `${filenamesWithoutExtension}.${shouldBeFinalExtension}`;
}

async function mergeFiles(...fileNames: string[]) {
    const mergedNames = getFileNamesMerged(fileNames);
    const mergedContent = await Promise.all(fileNames.map(filename => readFile(filename, 'utf8')));
    await writeFile(mergedNames, mergedContent.join('\n'));
}

mergeFiles(...process.argv.slice(2));