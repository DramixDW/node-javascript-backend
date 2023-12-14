import { readdir } from "fs/promises";

// ./ correspond au répertoire courant
// ../ correspond au répertoir parent
readdir('./', {
    withFileTypes: true,
}).then(result => {
    console.log(result);
})