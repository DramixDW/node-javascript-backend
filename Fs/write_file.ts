import { appendFile, writeFile } from "fs/promises";

const names = ["Amand", "Denis", "Maxime"];
writeFile("agenda.txt", names.join('\n')).then(() => {
    console.log('write done !');
    appendFile("agenda.txt", "\nMa meilleure loutre").then(() => {
        console.log('append done');
    })
});