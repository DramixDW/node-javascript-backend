 /*
   Créer un script qui lit le contenu d'un fichier.
   Et il comptera le nombre de character qui ne 
   sont pas des espace 
*/

import { readFile } from "fs/promises";

readFile(process.argv[2], 'utf8').then(file => {
   const fileWithoutSpace = file.replaceAll(/\s/g, "");
   console.log(`Il y ${fileWithoutSpace.length} charactères dans le fichier`);
})